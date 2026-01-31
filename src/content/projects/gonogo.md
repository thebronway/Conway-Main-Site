---
title: "GoNoGo"
description: "A Preflight App for Pilots to Decode Weather, Airspace and NOTAMs"
status: "Active Development"
heroImage: "/images/thumbnails/GoNoGo-AI-card.png"
---
# A Preflight App for Pilots to Decode Weather, Airspace and NOTAMs

> **Note:** AI normalizes data and can make errors. Always verify with official sources.

**Links:**
* [GitHub Repository](https://github.com/thebronway/GoNoGo)

## The Problem
I am a pilot, and honestly, deciphering the raw text of NOTAMs, Airspace, METARs, and TAFs is a massive pain. It is tedious, easy to miss something important, and feels outdated. I wanted a tool that could decode that raw data for me and tell me if I am good to go or if there is a problem.

## My Goal
My main goal was to dive into AI engineering and learn how to interact with LLMs. I wanted to see if I could chain together **Live APIs** (FAA data), **LLMs** (OpenAI), and **Python** to solve a real problem I face during preflight. I wanted to build a decoder that reasons through data rather than just displaying it.

## Website Content
This repository serves as an inside look at how I built this flight assistant:

* **Live FAA Integration:** How the app scrapes, parses, and caches real-time weather and NOTAM data directly from aviation.gov.
* **AI Integration:** The prompt engineering logic used to teach GPT-4o how to think like a CFI. It analyzes flight categories (VFR/IFR) and extracts critical safety info from raw text.
* **Hallucination Handling:** Documentation of the challenges I faced when the AI tried to invent airports or misinterpret geography, and the guardrails I built to stop it.
* **Streamlit Dashboard:** How I built a clean, dark mode cockpit interface using pure Python, focusing on speed and usability over complex frontend code.
* **Smart Fallbacks:** The logic behind the Nearest Airport feature, which automatically finds backup weather stations when searching for small private strips without a reporting station.