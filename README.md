# MM Solutions Website

This repository contains the website I built for MM Solutions, an ISO consultancy firm. The project focuses on presenting services clearly, building trust through company and certification information, and capturing enquiries through structured forms.

## Project Highlights

- Service pages for ISO and other certification offerings
- Company information pages (profile, methodology, policies, etc.)
- Contact and enquiry flows with validation and CAPTCHA
- Responsive layout for desktop and mobile
- Component-based UI built for maintainability

## Tech Stack

- Next.js (App Router)
- TypeScript
- Tailwind CSS
- shadcn/ui + Radix UI
- React Hook Form + Zod
- Framer Motion

## Folder Overview

- `app/`: Route pages and layouts
- `components/`: Reusable UI and feature components
- `hooks/`: Custom React hooks
- `lib/`: Shared utilities
- `public/`: Static assets
- `styles/`: Global styling and Tailwind-related styles

## Run Locally

### Prerequisites

- Node.js 18+
- pnpm

### Setup

```bash
pnpm install
```

### Development

```bash
pnpm dev
```

### Production

```bash
pnpm build
pnpm start
```