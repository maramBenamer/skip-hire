<<<<<<< HEAD
# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
=======

# Skip Options Redesign – React App

## Overview

This project is a responsive redesign of the skip selection page originally provided as a static mockup. The goal was to deliver a modern, clean, and professional user interface that works seamlessly on both desktop and mobile devices, while dynamically pulling live data from a given API.

Live API: [https://app.wewantwaste.co.uk/api/skips/by-location?postcode=NR32&area=Lowestoft](https://app.wewantwaste.co.uk/api/skips/by-location?postcode=NR32&area=Lowestoft)

## Original Design Summary

The original page (provided as an image) included:

- A cluttered and dense layout.
- Poor contrast and visual hierarchy.
- Dated color choices, lacking clarity and branding cohesion.

---

## What Was Redesigned & Why

### 1. *Color Palette and Typography*

*Changes:*
- Switched from dark greys and blues to a clean white background with sharp accent colors (blues, greys, and subtle neutrals).
- Chose system fonts with solid readability across platforms.

*Why:*
- *Design Principle:* Contrast & Accessibility. Clean color contrasts improve readability and reduce cognitive load.
- Blue was chosen for CTA buttons to evoke trust and maintain clarity.
- White backgrounds are standard to give room for content to breathe.

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
>>>>>>> b0ee52c965bcc76756c8303ebed6b4520b326022
