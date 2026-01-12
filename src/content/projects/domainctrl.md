---
title: "domainCtrl"
description: "A Self-Hosted DDNS & SSL Certificate Manager for Route 53"
status: "Active Development"
demoUrl: "https://domainctrl-demo.conway.im"
heroImage: "/images/thumbnails/domainCtrl-card.png"
---
# A Self-Hosted DDNS & SSL Certificate Manager

> **Note:** This app is nearing is in active development and should be used with caution.

**Links:**
* [GitHub Repository](https://github.com/thebronway/domain-manager)
* [DockerHub Image](https://hub.docker.com/r/thebronway/domain-manager)

## Purpose
I designed this domain and certificate manager because I had so many different subdomains and I use letsencrypt certificates to secure all of those domains and subdomains. While command-line tools exist for these tasks, I wanted a unified UI to visualize and manage everything from a bird's-eye view.

* **Security Note:** I currently **do not** expose my personal instance to the web, as the app does not have built-in auth.

## Key Features
* **Dynamic DNS (DDNS):** Automatically checks your public IP and updates AWS Route 53 A-records if they change.
* **SSL Management:** Wraps Certbot to handle creation and renewal of certificates using the DNS-01 challenge (perfect for Wildcards).
* **Unified Dashboard::** A clean, responsive UI to view the status of all your domains at a glance.
* **Notifications:** Get alerts via Discord, Slack, Telegram, Email (SMTP), and more when IPs update or certs renew.
* **Mobile Friendly:** Fully responsive design that works great on your phone.

## Development Roadmap

> **Note:** This app will be rebuilt and updated regularly, in order to keep certbot updated.

### Current Version: v0.4

### Upcoming Version: v0.5
* **Focus:** Bug Fixes and Improvements
* **Planned Changes:**
    * Timezone Bug Fixes
    * Demo Refactor
    * Settings Page Updates
    * Backend Changes to open up to more DDNS providers in the future
    * Optional Disable Cert Management
    * Refine Docker Arguments

### Upcoming Version: v0.6
* **Focus:** Bug Fixes and Improvements
* **Planned Changes:**
    * Refinements and Testing

### Upcoming Version: v0.7
* **Focus:** Bug Fixes and Improvements
* **Planned Changes:**
    * Adding other DDNS proivders (Cloudflare, Google, etc.)

### Upcoming Version: v0.8
* **Focus:** Bug Fixes and Improvements
* **Planned Changes:**
    * Cleaning up documentation and README
    * Unriad CA Template

### Upcoming Version: v0.9
* **Focus:** Bug Fixes
* **Planned Changes:**
    * Refinements and Testing

### Upcoming Version: v1.0 (Production)
* **Focus:** Final Touches
* **Planned Changes:**
    * *No features or bug fixes are planned for this release.*