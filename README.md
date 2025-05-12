# Skip Options Redesign – React App

## Overview

This project is a responsive redesign of the skip selection page originally provided as a static mockup. The goal was to deliver a modern, clean, and professional user interface that works seamlessly on both desktop and mobile devices, while dynamically pulling live data from a given API.

Live API: [https://app.wewantwaste.co.uk/api/skips/by-location?postcode=NR32&area=Lowestoft](https://app.wewantwaste.co.uk/api/skips/by-location?postcode=NR32&area=Lowestoft)

## Original Design Summary

The original page (provided as an image) included:

- A cluttered and dense layout.
- Poor contrast and visual hierarchy.
- Unpolished typography and alignment.
- Dated color choices, lacking clarity and branding cohesion.

---

## What Was Redesigned & Why

### 1. *Color Palette and Typography*

*Changes:*
- Switched from murky greys, dark blues, and blacks to a clean white background with sharp accent colors (blues, greys, and subtle neutrals).
- Chose system fonts with solid readability across platforms (e.g., Segoe UI, Roboto, sans-serif).

*Why:*
- *Design Principle:* Contrast & Accessibility. Clean color contrasts improve readability and reduce cognitive load.
- Blue was chosen for CTA buttons and highlights to evoke trust and maintain clarity.
- White backgrounds are standard in modern UI to give room for content to breathe.

---

### 2. *Layout and Responsiveness*

*Changes:*
- Introduced a grid layout using CSS Flexbox and media queries.
- Ensured skip cards stack neatly on mobile while sitting in rows on wider screens.
- Added padding, spacing, and consistent margins for visual rhythm.

*Why:*
- *Design Principle:* Responsive Design & Spacing Consistency.
- Uniform spacing reduces visual noise and improves scannability.

---

### 3. *Card Design for Skip Options*

*Changes:*
- Each skip size is rendered inside a visually distinct “card”.
- Key attributes (Size, Price, Hire Duration, etc.) are clearly labeled and spaced.
- CTA Button (“Select”) is given visual prominence.

*Why:*
- *Design Principle:* Component-Based Design & Visual Hierarchy.
- Card layouts are intuitive for grouped data.
- Clear call-to-actions help guide user decisions without confusion.

---

### 4. *Data Handling*

*Changes:*
- Real-time API fetching added via useEffect.
- Skip options dynamically populate from API.

*Why:*
- *Design Principle:* Separation of Concerns.
- Keeping logic separate from presentation allows for scalability and real-world integration.

---

### 5. *UX Enhancements*

*Changes:*
- Added loading state while data fetches.
- Graceful handling of empty/error states (e.g., fetch fails).
- Hover and focus styles for buttons.

*Why:*
- *Design Principle:* Feedback & Usability.
- Visual feedback improves trust and keeps users informed of what’s happening.

---

## Tech Stack

- *React* (Functional Components)
- *CSS Modules* (Scoped styling)
- *JavaScript (ES6+)*


---

## How to Run the Project

```bash
# Install dependencies
npm install

# Start the development server
npm run start
