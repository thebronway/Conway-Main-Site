---
title: "Switchboard"
description: "Identity & Access Management (IAM) Dashboard for Homelabs & Self-Hosted Environments"
status: "Concept Phase"
heroImage: "/images/thumbnails/Switchboard-card.webp"
order: 3
version: "v0.0.0"
---
# Identity & Access Management (IAM) Dashboard for Homelabs & Self-Hosted Environments

Switchboard connects your identity provider (LDAP or Local Database) with self-hosted services (Plex, Overseerr, Wireguard). It provides administrators with Role-Based Access Control (RBAC) and users with a portal to manage credentials and service access.

---

## Core Features

### Security
- **Containerized Architecture:** Runs within Docker with non-root user enforcement.
- **Configuration Validation:** Environment variable validation on boot (via Zod/Joi).
- **External Database:** Requires PostgreSQL for data storage.
- **Encryption:** LDAP bind passwords and plugin API keys are encrypted at rest using AES-256-GCM.
- **Audit Logging:** Login attempts, password resets, and permission changes are logged in JSON format.
- **Rate Limiting:** Defenses against brute-force attacks on authentication endpoints.

### Identity & Access Management
- **Identity Sources:** Connect to an LDAP/Active Directory server or use the Local Database provider.
- **LDAP Synchronization & Write-Back:** Read-only user syncs or LDAPS/StartTLS to allow users to reset LDAP passwords.
- **Role-Based Access Control (RBAC):** Map users to roles and assign plugin access based on permission schemas.

### User Portal
- **Onboarding:** Setup workflows for added users.
- **Profile Management:** Users update personal information and reset passwords via tokenized email links.
- **Service Dashboard:** Users view modules and services they are granted access to.

### Plugin Engine
Switchboard uses a domain-driven architecture. The application can be extended with plugins that use lifecycle hooks (`install`, `uninstall`, `grantAccess`, `revokeAccess`).

**First-Party Modules:**
- **Plex:** Invite or revoke users from Plex library shares.
- **Overseerr / Jellyseerr:** Map Switchboard users to Overseerr permissions.
- **Wireguard (API):** Provision and revoke VPN profiles via external managers (e.g., wg-easy). Switchboard acts as an API client, not the VPN server.