# Atal Yuva Vikas 2026

A bilingual (English/Odia) public information and registration website for the Atal Yuva Vikas 2026 summer residential talent program.

Built with Next.js, React, and Tailwind CSS.

## Features

- Bilingual UI with instant language toggle (`en` / `od`)
- Language preference persistence across refresh
- Odia numeral rendering in Odia mode
- JSON-driven content and branding (titles, images, contacts, links)
- Hero + registration QR flow
- Responsive layout with government-style header/footer
- WhatsApp quick-contact button

## Tech Stack

- Next.js `16`
- React `19`
- TypeScript
- Tailwind CSS `4`
- `qrcode.react` for QR rendering

## Getting Started

### 1) Install dependencies

```bash
npm install
```

### 2) Configure environment variables

Create a `.env` file in the project root:

```env
NEXT_PUBLIC_GOOGLE_FORM_URL=https://forms.google.com/your-form-url
```

### 3) Run development server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build production bundle
- `npm run start` - Start production server
- `npm run lint` - Run lint checks

## Project Structure

```text
app/                    # Next.js app router pages/layout
components/
  layout/               # Header, Footer, WhatsApp button
  sections/             # Hero, About, Minister, Courses, Centers, Registration, Contact
data/
  config.json           # Program metadata, images, contact, poweredBy
  centers.json          # Centers, capacities, facilities (en/od)
  courses.json          # Course catalog (en/od)
lib/
  i18n/                 # en.json, od.json, i18n helpers
  language-context.tsx  # Language state, persistence, Odia number localization
```

## Content Management (JSON-First)

This project is set up so non-code updates can be made from JSON files.

- Update global branding/contact/images in `data/config.json`
- Update section text in:
  - `lib/i18n/en.json`
  - `lib/i18n/od.json`
- Update centers/courses in:
  - `data/centers.json`
  - `data/courses.json`

### Logo Configuration

Use these keys in `data/config.json`:

- `program.images.navbarLogo`
- `program.images.footerLogo`
- Fallback: `program.images.logo`

## Localization Notes

- Supported languages: `en`, `od`
- User selection is stored in browser local storage (`atal-yuva-vikas-language`)
- Numeric digits are converted to Odia digits in Odia mode where rendered through localization helpers

## Deployment

Deploy as a standard Next.js app (Vercel or any Node-compatible platform).

Make sure `NEXT_PUBLIC_GOOGLE_FORM_URL` is set in the deployment environment.

