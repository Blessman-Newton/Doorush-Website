# Doorush Website (React)

A modern, responsive React codebase for **Doorush** (delivery, pickup, and everything in between), converted from the original static HTML file while preserving 100% of the design, styling, copy, animations, interactive features, and functionality.

## Features Preserved & Converted
- **Exact Visual Design & Theme**:
  - Full support for light and dark color schemes (`prefers-color-scheme: dark` and `[data-theme="dark"]`).
  - Google Fonts integration (`Space Grotesk` & `Inter`).
  - CSS Custom Properties / Design tokens matching original specs.
  - Safe area insets support for mobile notch displays.
- **Dynamic Routing**:
  - Hash-based views for `#vendors` (Merchants onboarding page) and `#riders` (Riders onboarding page) as well as the main home view (`#top`, `#services`, `#how`, etc.).
  - Smooth anchor scrolling to specific sections.
- **Interactive UI Components**:
  - **Launch Countdown Timer**: Dynamically computes days remaining until launch date (January 19, 2027) with auto-updates.
  - **Mobile Navigation**: Responsive hamburger menu with accessible ARIA states and automatic close on navigation.
  - **Waitlist Forms**: Integrated with Formspree endpoint with validation, async submission, feedback statuses, and auto-reset.
  - **Interactive App Screens Carousel**: 5 mock screens with automatic scrolling, touch/hover pause, and manual navigation buttons.
  - **Scroll Reveal Animations**: IntersectionObserver-powered `.rv.on` transitions.
  - **Careers Application Modal**: Accessible popup dialog with contact mailto and tel links, backdrop click-to-close, and `Escape` key support.
  - **Category Chips**: Role and type selection for merchant categories ("Restaurant", "Store", "Gas or laundry service").
  - **High-Resolution Vector Graphics & Logos**: Vector illustrations and optimized partner assets (`Big Bite`, `Speedaf Express`, `Pizzaman`, `KFC`).

## Project Structure
```
doorush-website/
├── public/
│   └── images/               # Extracted and optimized images
│       ├── google-play.png
│       ├── app-store.png
│       ├── rider.jpg
│       ├── handover.jpg
│       ├── big-bite.jpg
│       ├── speedaf.jpg
│       ├── pizzaman.jpg
│       └── kfc.jpg
├── src/
│   ├── components/
│   │   ├── AboutSection.jsx   # "About us" section
│   │   ├── ApplyModal.jsx     # Career application modal dialog
│   │   ├── AppScreens.jsx     # Interactive phone screens carousel
│   │   ├── CareersSection.jsx # "We're hiring" positions grid
│   │   ├── FaqSection.jsx     # Collapsible FAQ accordion
│   │   ├── Footer.jsx         # Footer navigation and contact info
│   │   ├── Header.jsx         # Top countdown bar & sticky navigation
│   │   ├── Hero.jsx           # Hero banner, phone mockup & floating chips
│   │   ├── HowItWorks.jsx     # 3-step process cards
│   │   ├── Icons.jsx          # Vector symbols and storefront SVG
│   │   ├── OurPartners.jsx    # Partner logos showcase
│   │   ├── PartnersSection.jsx# "Grow with Doorush" cards
│   │   ├── ScooterBand.jsx    # Rider vector banner illustration
│   │   ├── Services.jsx       # 4 services grid
│   │   ├── SubPage.jsx        # Configurable view for Merchants & Riders
│   │   ├── TrustSection.jsx   # 4 trust & safety badges
│   │   ├── WaitlistForm.jsx   # Reusable Formspree waitlist form
│   │   └── WaitlistSection.jsx# "Be first in line" CTA section
│   ├── constants/
│   │   └── data.jsx           # Copy, configurations, and data models
│   ├── App.jsx                # Main application & routing controller
│   ├── index.css              # Global styles, variables, and animations
│   └── main.jsx               # React DOM entry point
├── index.html                 # HTML template with fonts and meta tags
├── vite.config.js             # Vite configuration
└── package.json               # Dependencies and scripts
```

## Getting Started

### 1. Install Dependencies
```bash
npm install
```

### 2. Start Development Server
```bash
npm run dev
```

### 3. Build for Production
```bash
npm run build
```

### 4. Preview Production Build
```bash
npm run preview
```
