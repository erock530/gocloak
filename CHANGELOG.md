# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.1.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

Releases are automated via [release-please](https://github.com/googleapis/release-please).
Use [Conventional Commits](https://www.conventionalcommits.org/) (`feat:`, `fix:`, etc.) to drive version bumps.

## [1.0.2](https://github.com/erock530/gocloak/compare/v1.0.1...v1.0.2) (2026-02-23)


### ### Documentation

* update README and add LICENSE reference; ci: golangci-lint v2, separate lint/tests jobs, publish-benchmarks on push to main ([74f1c90](https://github.com/erock530/gocloak/commit/74f1c9028bf1d82b9c4f71d82f5ed7652fe7b8c9))


### ### Changed

* run tests on push to non-main so release PR gets status ([#4](https://github.com/erock530/gocloak/issues/4)) ([f534e71](https://github.com/erock530/gocloak/commit/f534e71897f5b55634a5c36e22f343b8110d3180))

## [1.0.1](https://github.com/erock530/gocloak/compare/v1.0.0...v1.0.1) (2026-02-21)


### ### Fixed

* align Go version with golangci-lint for CI compatibility ([e41be53](https://github.com/erock530/gocloak/commit/e41be537481642c119761f4adb8c46b88b21aa8c))
* allow workflow to continue when Nancy lacks OSS Index credentials ([5fcf242](https://github.com/erock530/gocloak/commit/5fcf242f0e48b90582b306849ab450247807cd82))
* apply gofmt to models.go ([3703aca](https://github.com/erock530/gocloak/commit/3703acae0315ad145e0d30c2326c84fe19ca0b27))
* change MembershipType to string for JSON unmarshal compatibility ([dae087d](https://github.com/erock530/gocloak/commit/dae087d9300666fdde8b8e5ec831c6e382d0c369))
* resolve golangci-lint formatting in RolePolicyRepresentation ([7198071](https://github.com/erock530/gocloak/commit/71980710b63d750aa7ac8d70d6d91205d7338c95))
* resolve golangci-lint var-naming and gofmt issues ([268203e](https://github.com/erock530/gocloak/commit/268203e6f4f6c126337187f56388d2ea0f1af9ef))
* set KC_HOSTNAME=127.0.0.1 in CI so token audience matches client URL ([417bcf2](https://github.com/erock530/gocloak/commit/417bcf2fad87f728fac43c4e9625c35db21ddcea))
* use 127.0.0.1 for Keycloak in CI to avoid IPv6 connection issues ([6fe372d](https://github.com/erock530/gocloak/commit/6fe372d5326cd9ab86d289755b84237770863b13))


### ### Changed

* ensure gh-pages branch exists before benchmark action ([9568dad](https://github.com/erock530/gocloak/commit/9568dad5c7efd2af974c6bc069e5bc3c9f23c0e5))
* set git identity for gh-pages init step ([e1d66b0](https://github.com/erock530/gocloak/commit/e1d66b081c05049fb16d267a3e505884d0663f93))

## [Unreleased]

## [1.0.0] - 2025-02-21

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

[Unreleased]: https://github.com/erock530/gocloak/compare/v1.0.0...HEAD
[1.0.0]: https://github.com/erock530/gocloak/releases/tag/v1.0.0
