# gocloak

A Go client library for [Keycloak](https://www.keycloak.org/), the open-source identity and access management solution. It provides access to the Keycloak Admin REST API and OpenID Connect flows (token, refresh, logout, introspection, etc.).

This project is **forked from [Nerzal/gocloak](https://github.com/Nerzal/gocloak)**. We thank the original author and contributors for their work.

## Requirements

- Go 1.25.7 or later
- A running Keycloak instance

## Installation

```bash
go get github.com/erock530/gocloak
```

## Quick start

```go
package main

import (
    "context"
    "github.com/erock530/gocloak"
)

func main() {
    ctx := context.Background()
    client := gocloak.NewClient("https://your-keycloak-server")

    token, err := client.LoginAdmin(ctx, "admin", "admin", "master")
    if err != nil {
        panic(err)
    }

    users, err := client.GetUsers(ctx, token.AccessToken, "your-realm", gocloak.GetUsersParams{})
    if err != nil {
        panic(err)
    }
    // ...
}
```

## Features

The library exposes the full Keycloak Admin REST API and OpenID Connect endpoints via the `GoCloakIface` interface (suitable for testing and dependency injection). Feature areas include:

- **HTTP / low-level**: Configurable requests with bearer or basic auth, `RestyClient()` access for custom calls
- **Server & OpenID Connect**: `GetServerInfo`, `GetUserInfo` / `GetRawUserInfo`, `GetCerts`, `GetIssuer`, token introspection (`RetrospectToken`), `DecodeAccessToken` / `DecodeAccessTokenCustomClaims`, `GetToken`, requesting-party token and permissions (`GetRequestingPartyToken`, `GetRequestingPartyPermissions`, `GetRequestingPartyPermissionDecision`), `RefreshToken`, `RevokeToken`
- **Authentication**: Admin login (`LoginAdmin`), client credentials (`LoginClient`, `LoginClientSignedJWT`), resource owner password (`Login`, `LoginOtp`), token exchange (`LoginClientTokenExchange`, `DirectNakedImpersonationTokenExchange`), logout (`Logout`, `LogoutPublicClient`, `LogoutAllSessions`, `LogoutUserSession`), `ExecuteActionsEmail`, `SendVerifyEmail`
- **Realms**: CRUD and cache (`GetRealm`, `GetRealms`, `GetRealmsWithParams`, `CreateRealm`, `UpdateRealm`, `DeleteRealm`, `ClearRealmCache`, `ClearUserCache`, `ClearKeysCache`)
- **Users**: CRUD, count, groups, sessions, federated identities, brute-force status; role mappings; password and management permissions (`CreateUser`, `DeleteUser`, `GetUserByID`, `GetUserCount`, `GetUsers`, `GetUserGroups`, `GetUsersByRoleName`, `GetUsersByClientRoleName`, `SetPassword`, `UpdateUser`, `AddUserToGroup`, `DeleteUserFromGroup`, `GetUserSessions`, `GetUserOfflineSessionsForClient`, `AddClientRolesToUser`, `DeleteClientRolesFromUser`, `GetUserFederatedIdentities`, `CreateUserFederatedIdentity`, `DeleteUserFederatedIdentity`, `GetUserBruteForceDetectionStatus`, `ClearUserBruteForce`, `ClearAllBruteForce`, `UpdateUsersManagementPermissions`, `GetUsersManagementPermissions`)
- **Groups**: CRUD, hierarchy, default groups, role mappings, members, management permissions (`CreateGroup`, `CreateChildGroup`, `UpdateGroup`, `UpdateGroupManagementPermissions`, `DeleteGroup`, `GetGroup`, `GetChildGroups`, `GetGroupByPath`, `GetGroups`, `GetGroupsCount`, `GetGroupMembers`, `GetDefaultGroups`, `AddDefaultGroup`, `RemoveDefaultGroup`, `GetRoleMappingByGroupID`, `GetGroupManagementPermissions`, `GetGroupsByRole`, `GetGroupsByClientRole`)
- **Clients**: CRUD, representation and management permissions, secrets (including rotated), initial access, certificates, service account, protocol mappers, offline/user sessions (`CreateClient`, `CreateClientRepresentation`, `UpdateClient`, `UpdateClientRepresentation`, `DeleteClient`, `DeleteClientRepresentation`, `GetClient`, `GetClientRepresentation`, `GetAdapterConfiguration`, `GetClients`, `GetClientSecret`, `RegenerateClientSecret`, `GetRotatedClientSecret`, `InvalidateRotatedClientSecret`, `GetClientServiceAccount`, `CreateClientInitialAccess`, `GetClientInitialAccess`, `DeleteClientInitialAccess`, `GetClientCertificate`, `GenerateClientCertificate`, `GetClientOfflineSessions`, `GetClientUserSessions`, `CreateClientProtocolMapper`, `UpdateClientProtocolMapper`, `DeleteClientProtocolMapper`, `UpdateClientManagementPermissions`, `GetClientManagementPermissions`)
- **Client scopes**: CRUD, protocol mappers, default/optional scopes, scope mappings (realm and client roles) (`CreateClientScope`, `UpdateClientScope`, `DeleteClientScope`, `GetClientScope`, `GetClientScopes`, `GetClientScopeProtocolMappers`, `GetClientScopeProtocolMapper`, `CreateClientScopeProtocolMapper`, `UpdateClientScopeProtocolMapper`, `DeleteClientScopeProtocolMapper`, default/optional scope helpers, `GetClientScopeMappings`, `GetClientScopeMappingsRealmRoles*`, `GetClientScopeMappingsClientRoles*`, `GetClientScopesScopeMappingsRealmRoles*`, `GetClientScopesScopeMappingsClientRoles*`)
- **Realm roles**: CRUD, composites, user/group mappings (`CreateRealmRole`, `GetRealmRole`, `GetRealmRoleByID`, `GetRealmRoles`, `GetRealmRolesByUserID`, `GetRealmRolesByGroupID`, `UpdateRealmRole`, `UpdateRealmRoleByID`, `DeleteRealmRole`, `AddRealmRoleToUser`, `DeleteRealmRoleFromUser`, `AddRealmRoleToGroup`, `DeleteRealmRoleFromGroup`, `AddRealmRoleComposite`, `DeleteRealmRoleComposite`, `GetCompositeRealmRoles*`, `GetAvailableRealmRoles*`)
- **Client roles**: CRUD, composites, user/group mappings (`CreateClientRole`, `GetClientRoles`, `GetClientRole`, `GetClientRoleByID`, `GetClientRolesByUserID`, `GetClientRolesByGroupID`, `UpdateRole`, `DeleteClientRole`, `AddClientRolesToUser`, `AddClientRolesToGroup`, `DeleteClientRolesFromUser`, `DeleteClientRoleFromGroup`, `AddClientRoleComposite`, `DeleteClientRoleComposite`, `GetCompositeClientRoles*`, `GetAvailableClientRoles*`)
- **Role mappings**: `GetRoleMappingByUserID`, `GetRoleMappingByGroupID`, `GetRealmRoleGroups`
- **Components**: CRUD and query (`CreateComponent`, `GetComponents`, `GetComponentsWithParams`, `GetComponent`, `UpdateComponent`, `DeleteComponent`)
- **Authentication flows**: CRUD and executions (`GetAuthenticationFlows`, `GetAuthenticationFlow`, `CreateAuthenticationFlow`, `UpdateAuthenticationFlow`, `DeleteAuthenticationFlow`, `GetAuthenticationExecutions`, `CreateAuthenticationExecution`, `UpdateAuthenticationExecution`, `DeleteAuthenticationExecution`, `CreateAuthenticationExecutionFlow`)
- **Identity providers**: CRUD, broker config export/import, mappers (`CreateIdentityProvider`, `GetIdentityProviders`, `GetIdentityProvider`, `UpdateIdentityProvider`, `DeleteIdentityProvider`, `ExportIDPPublicBrokerConfig`, `ImportIdentityProviderConfig`, `ImportIdentityProviderConfigFromFile`, `CreateIdentityProviderMapper`, `GetIdentityProviderMapper`, `GetIdentityProviderMapperByID`, `GetIdentityProviderMappers`, `UpdateIdentityProviderMapper`, `DeleteIdentityProviderMapper`)
- **Authorization (UMA / resource server)**: Resources, scopes, policies, permissions (admin and client tokens); permission tickets and user permission grant/update/revoke; resource policies (`GetResource`, `GetResources`, `CreateResource`, `UpdateResource`, `DeleteResource`, `GetResourceServer`, `GetScope`, `GetScopes`, `CreateScope`, `UpdateScope`, `DeleteScope`, `GetPermissionScope`, `UpdatePermissionScope`, `GetPolicy`, `GetPolicies`, `CreatePolicy`, `UpdatePolicy`, `DeletePolicy`, `GetPermission`, `GetPermissions`, `CreatePermission`, `UpdatePermission`, `DeletePermission`, and related helpers; `CreatePermissionTicket`, `GrantUserPermission`, `UpdateUserPermission`, `GetUserPermissions`, `DeleteUserPermission`; `GetResourcePolicy`, `GetResourcePolicies`, `CreateResourcePolicy`, `UpdateResourcePolicy`, `DeleteResourcePolicy`)
- **Credentials**: Registrators, user credential types, list/delete/update/label, disable by type, move (`GetCredentialRegistrators`, `GetConfiguredUserStorageCredentialTypes`, `GetCredentials`, `DeleteCredentials`, `UpdateCredentialUserLabel`, `DisableAllCredentialsByType`, `MoveCredentialBehind`, `MoveCredentialToFirst`)
- **Events**: `GetEvents`, `GetAdminEvents`, `DeleteAdminEvents`
- **Session stats**: `GetClientSessionStats`
- **Required actions**: Register, list unregistered/registered, get, update, delete (`RegisterRequiredAction`, `GetUnregisteredRequiredActions`, `GetRequiredActions`, `GetRequiredAction`, `UpdateRequiredAction`, `DeleteRequiredAction`)
- **KeyStore**: `GetKeyStoreConfig`
- **Organizations** (Keycloak 26+): Full API — create, get, update, delete; members (add, remove, list, count, get by ID); member’s organizations; organization identity providers (`CreateOrganization`, `GetOrganizations`, `GetOrganizationByID`, `UpdateOrganization`, `DeleteOrganization`, `AddUserToOrganization`, `RemoveUserFromOrganization`, `GetOrganizationMemberCount`, `GetOrganizationMemberByID`, `GetOrganizationMembers`, `GetMemberAssociatedOrganizations`, `AddOrganizationIdentityProvider`, `RemoveOrganizationIdentityProvider`, `GetOrganizationIdentityProviderByAlias`, `GetOrganizationIdentityProviders`)

## Changes in this fork

For a full list of additions, fixes, and changes (including Organizations support, new API functions, model updates, and Go version bumps), see **[CHANGELOG.md](CHANGELOG.md)**.

## License

This project is licensed under the Apache License 2.0 — see the [LICENSE](LICENSE) file for the full text. This repository is a fork of [Nerzal/gocloak](https://github.com/Nerzal/gocloak); the original work remains under its authors’ copyright as noted in LICENSE.
