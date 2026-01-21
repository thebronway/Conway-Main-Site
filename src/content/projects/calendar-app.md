---
title: "Calendar App"
description: "A Simple Self-Hosted Calendar App"
status: "Active Development"
demoUrl: "https://calendar-demo.conway.im"
heroImage: "/images/thumbnails/CalendarApp-card.png"
---
# A Simple Self-Hosted Calendar App

> **Note:** This app is nearing its full production release.

**Links:**
* [GitHub Repository](https://github.com/thebronway/calendar-app)
* [DockerHub Image](https://hub.docker.com/r/thebronway/calendar-app)

## Purpose
I designed this calendar to be self-hosted and easily shared with friends and family. The goal is to keep everyone informed about my travel plans and availability so they can plan accordingly.

* **Note:** For production use, it is strongly recommended to protect your instance using a reverse proxy and authentication service (e.g., Nginx and Authentik).

## Features

* **Year-at-a-Glance:** Visual dashboard for the entire year.
* **Deep Customization:** Define color-coded categories and custom activity icons.
* **Smart Tracking:** Log locations, rich text notes, and visualize travel stats.
* **Interactive Filters:** Click stats or key items to highlight specific days instantly.
* **Real-Time Sync:** Updates are pushed via WebSockets to all connected clients.
* **Admin Mode:** Password-protected editing with a public read-only view.
* **Responsive & Dark Mode:** Optimized for mobile with automatic dark theme support.

## Screenshot

<img src="/images/content/calendar-0.7-view.png" alt="Calendar Screenshot" width="600" alt="Calendar Screenshot">

## Development Roadmap

### Current Version: v0.7

### Upcoming Version: v0.8
* **Focus:** Bug Fixes and Improvements
* **Planned Changes:**
    * Refinements and Testing
    * UI Updates (color updates, clear filters)
    * Search?
    * favicon
    * Code hardening
    * Remove some screenshots from README, use summary
    * Share Sheet (1200x630)

### Upcoming Version: v0.9
* **Focus:** Bug Fixes and Improvements
* **Planned Changes:**
    * Refinements and Testing
    * Unriad CA Template
    * Code hardening

### Upcoming Version: v0.95 (release canidate)
* **Focus:** Bug Fixes and Improvements
* **Planned Changes:**
    * Refinements and Testing

### Upcoming Version: v1.0 (Production)
* **Focus:** Final Touches
* **Planned Changes:**
    * *No features or bug fixes are planned for this release.*