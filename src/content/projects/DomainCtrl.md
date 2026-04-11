---
title: "domainCtrl"
description: "A Self-Hosted, Automated DDNS & SSL Certificate Manager"
status: "Active Development"
demoUrl: "https://domainctrl-demo.conway.im"
gitUrl: "https://github.com/thebronway/domainCtrl"
dockerUrl: "https://hub.docker.com/r/thebronway/domainCtrl"
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
2.  **Authentication:** **This app has no built authentication.** If you choose to expose this to the internet, it is strongly, strongly, super strongly recommended to protect your instance using a reverse proxy and authentication service (e.g., Nginx and Authentik).

## Screenshots

<details><summary><b>Desktop</b></summary>

<br>
<img src="https://raw.githubusercontent.com/thebronway/domainCtrl/refs/heads/main/screenshots/desktop-dashboard-0.6.png" width="800" alt="Desktop Screenshot">
<br>
<br>
<img src="https://raw.githubusercontent.com/thebronway/domainCtrl/refs/heads/main/screenshots/desktop-settings-0.6.png" width="800" alt="Desktop Screenshot">

</details>
<br>
<details><summary><b>Mobile</b></summary>

<br>

<img src="https://raw.githubusercontent.com/thebronway/domainCtrl/refs/heads/main/screenshots/mobile-dashboard-0.6.png" width="300" alt="Mobile Screenshot">
<br>
<br>
<img src="https://raw.githubusercontent.com/thebronway/domainCtrl/refs/heads/main/screenshots/mobile-settings-0.6.png" width="300" alt="Mobile Screenshot">

</details>

## Development Roadmap

> **Note:** This app will be rebuilt and updated regularly, in order to keep certbot updated.

### Current Version: v0.65

### Upcoming Version: v0.7
* **Focus:** Bug Fixes and Improvements
* **Planned Changes:**
    * Refinements and Testing
        * up down reset on filter
        * reset button only for filtered domains
        * light mode tweaks (buttons, log,)
    * Adding other DNS proivders (borken out into their own components)
        * None (this is going to be a pretty big architectural shift, because I want the default to be a blank canvas in order to accommodate multiple instances of the same provider, and promote providers like if you have a remote instance of the app on one computer it could read from that with API keys, which I'll set up in the future)
        * Cloudflare
        * Azure DNS
        * Google Cloud DNS
    * One instance multiple providers
    * Code cleanup
        * If delete domain, confirm, and delete certs/data/states

### Upcoming Version: v0.75
* **Focus:** Bug Fixes and Improvements
* **Planned Changes:**
    * Refinements and Testing
        * API key for sending / receiving
            * Add local remote
        * Log Plain Text

### Upcoming Version: v0.8
* **Focus:** Bug Fixes and Improvements
* **Planned Changes:**
    * Refinements and Testing

### Upcoming Version: v0.85
* **Focus:** Bug Fixes and Improvements
* **Planned Changes:**
    * Wiki on git. 
    * Report a Bug of git. 
    * Code Cleanup
        * CSS Organization
    * Code hardening

### Upcoming Version: v0.9 (release canidate)
* **Focus:** Bug Fixes and Improvements
* **Planned Changes:**
    * Code Cleanup
    * Unriad CA Template

### Upcoming Version: v1.0 (Production)
* **Focus:** Final Touches
* **Planned Changes:**
    * *No features or bug fixes are planned for this release.*

### After v1.X Production Release 
* Version numbers will change to year.month.minor-version (ex 2027.1.1)
* Releases will be monthly or every other month depending on certbot releases
    * This is so that certbot will always be up to date. 