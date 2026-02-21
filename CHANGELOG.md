# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.1.0/).

## [Unreleased]

### Added

#### Models
- **CertificateRepresentation** – Client and identity provider certificates (privateKey, publicKey, certificate, kid, jwks)
- **ClientInitialAccessCreatePresentation** – Create initial access token (expiration, count, webOrigins)
- **ClientInitialAccessPresentation** – Initial access token representation (id, token, timestamp, expiration, count, remainingCount)
- **KeyStoreConfigImport** – Keystore import/export configuration
- **GetRealmsParams** – Query parameters for listing realms (e.g. briefRepresentation)
- Extended **Key** model with `Use` and `ValidTo` fields for Keycloak keys metadata
- **Direction** field on **GetAdminEventsParams** – Sort order for admin events

#### API Functions
- **GetRotatedClientSecret** – Get rotated client secret
- **InvalidateRotatedClientSecret** – Invalidate rotated client secret
- **CreateClientInitialAccess** – Create client initial access token
- **GetClientInitialAccess** – List all client initial access tokens
- **DeleteClientInitialAccess** – Delete client initial access token
- **GetClientCertificate** – Get client certificate for attribute (e.g. saml.signing)
- **GenerateClientCertificate** – Generate new client certificate and key pair
- **GetRealmsWithParams** – List realms with optional query parameters (e.g. briefRepresentation)
- **DeleteAdminEvents** – Delete all admin events in a realm
- **GetClientSessionStats** – Get client session statistics (client ID → active session count)

All new API functions are added to the **GoCloak** interface (`gocloak_iface.go`).

### Fixed
- **membershipType typo** – Corrected `membershipetype` to `membershipType` in `GetMembersParams` and `MemberRepresentation` for correct Keycloak JSON serialization

### Changed
- **GetRealms** – Now delegates to `GetRealmsWithParams` internally for consistency with optional parameters
