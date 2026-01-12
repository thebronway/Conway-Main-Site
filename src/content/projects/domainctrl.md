---
title: "domainCtrl"
description: "A Self-Hosted, Automated DDNS & SSL Certificate Manager"
status: "Active Development"
demoUrl: "https://domainctrl-demo.conway.im"
heroImage: "/images/thumbnails/domainCtrl-card.png"
---
# A Self-Hosted, Automated DDNS & SSL Certificate Manager. 

> **Note:** This app is nearing is in active development and should be used with caution.

> **Note:** Currently domainCtrl only supports AWS Route 53 (more providers coming soon).

**Links:**
* [GitHub Repository](https://github.com/thebronway/domainCtrl)
* [DockerHub Image](https://hub.docker.com/r/thebronway/domainCtrl)

## Purpose
I designed this domain and certificate manager because I had so many different subdomains and I use letsencrypt certificates to secure all of those domains and subdomains. While command-line tools exist for these tasks, I wanted a unified UI to visualize and manage everything from a bird's-eye view.

## Key Features
* **Dynamic DNS (DDNS):** Automatically checks your public IP and updates DNS records if they change.
* **SSL Management:** Wraps Certbot to handle creation and renewal of certificates using the DNS-01 challenge (Wildcard supported).
* **Web Dashboard:** A clean, responsive UI to view the status of all your domains at a glance.
* **Settings UI:** Configure domains, notifications, timezones, and log retention directly from the browser.
* **Notifications:** Get alerts via Discord, Slack, Telegram, Email (SMTP), and more.
* **Mobile Friendly:** Fully responsive design.

## Important Notes

1.  **SSL Lifecycle:** This app manages the full lifecycle of certificates. It can only renew certs it created. Existing certs should be replaced by ones generated here for auto-renewal.
2.  **Authentication:** **This app has no login.** You MUST run this behind a reverse proxy (Nginx, Traefik, etc.) with Basic Auth or SSO to secure the dashboard.

## Development Roadmap

> **Note:** This app will be rebuilt and updated regularly, in order to keep certbot updated.

### Current Version: v0.5

### Upcoming Version: v0.6
* **Focus:** Bug Fixes and Improvements
* **Planned Changes:**
    * Refinements and Testing
    * Favicon
    * Add License
    * Add Live Demo to README

### Upcoming Version: v0.7
* **Focus:** Bug Fixes and Improvements
* **Planned Changes:**
    * Adding other DDNS proivders (Cloudflare, Google, etc.)
    * Code cleanup

### Upcoming Version: v0.8
* **Focus:** Bug Fixes and Improvements
* **Planned Changes:**
    * Refinements and Testing
    * Unriad CA Template
    * Code hardening

### Upcoming Version: v0.9 (optional; no set release timeline)
* **Focus:** Bug Fixes
* **Planned Changes:**
    * Refinements and Testing

### Upcoming Version: v1.0 (Production) (no set release timeline)
* **Focus:** Final Touches
* **Planned Changes:**
    * *No features or bug fixes are planned for this release.*