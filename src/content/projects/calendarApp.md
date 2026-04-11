---
title: "Calendar App"
description: "A Simple Self-Hosted Calendar App"
status: "Active Development"
demoUrl: "https://calendar-demo.conway.im"
dockerUrl: "https://hub.docker.com/r/thebronway/calendar-app"
gitUrl: "https://github.com/thebronway/calendar-app"
heroImage: "/images/thumbnails/CalendarApp-card.png"
---
# A Simple Self-Hosted Calendar App

![License](https://img.shields.io/badge/license-MIT-blue.svg)
![Version](https://img.shields.io/badge/version-v0.8.2-blue.svg)
![Docker](https://img.shields.io/docker/pulls/thebronway/calendar-app?logo=docker)

## Purpose
I designed this calendar to be self-hosted and easily shared with friends and family. The goal is to keep everyone informed about my travel plans and availability so they can plan accordingly.

> **Note:** This app is nearing its full production release.
> **Note:** For production use, it is strongly recommended to protect your instance using a reverse proxy and authentication service (e.g., Nginx and Authentik).

## Features

* **Year-at-a-Glance:** Visual dashboard for the entire year.
* **Customization:** Define color-coded categories and custom activity icons.
* **Smart Tracking:** Log locations, rich text notes, and visualize travel stats.
* **Interactive Filters:** Click stats or key items to highlight specific days instantly.
* **Real-Time Sync:** Updates are pushed via WebSockets to all connected clients.
* **Admin Mode:** Password-protected editing with a public read-only view.
* **Responsive & Dark Mode:** Optimized for mobile with automatic dark theme support.

## Screenshot

<img src="/images/content/calendar-0.7-view.png" alt="Calendar Screenshot" width="600" alt="Calendar Screenshot">