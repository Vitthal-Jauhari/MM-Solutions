# MM Solutions
[![Ask DeepWiki](https://devin.ai/assets/askdeepwiki.png)](https://deepwiki.com/Vitthal-Jauhari/MM-Solutions)

This repository contains the source code for the official website of MM Solutions, a Delhi-based consultancy firm specializing in ISO certifications, process implementation, and company registration services. The site is designed to provide comprehensive information about the company's offerings, showcase its expertise, and generate leads through interactive enquiry forms.

The project is a modern, responsive web application built with Next.js, TypeScript, and styled with Tailwind CSS, utilizing the `shadcn/ui` component library for a clean and consistent user interface.

## Features

- **Comprehensive Service Information**: Detailed pages for a wide range of ISO standards (e.g., ISO 9001, 14001, 27001) and other certifications (HACCP, GMP, SA 8000).
- **In-Depth Company Profile**: Dedicated sections covering the company's corporate profile, accreditations, policies, training services, and certification methodology.
- **Interactive Forms**: User-friendly forms for general contact and specific service enquiries, featuring client-side validation, CAPTCHA, and success animations.
- **Responsive Design**: A fully responsive layout with a collapsible mobile navigation menu ensures a seamless experience across desktops, tablets, and mobile devices.
- **Modern UI/UX**: Built with a clean aesthetic, smooth animations, and a consistent component-based architecture using React and `shadcn/ui`.
- **High-Performance**: Leverages Next.js for server-side rendering and static site generation, ensuring fast load times and excellent SEO.

## Tech Stack

- **Framework**: [Next.js](https://nextjs.org/) (App Router)
- **Language**: [TypeScript](https://www.typescriptlang.org/)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/)
- **UI Components**: [shadcn/ui](https://ui.shadcn.com/), [Radix UI](https://www.radix-ui.com/)
- **Form Management**: [React Hook Form](https://react-hook-form.com/)
- **Animations**: [Framer Motion](https://www.framer.com/motion/)
- **Schema Validation**: [Zod](https://zod.dev/)

## Project Structure

The repository is organized following standard Next.js conventions:

-   `app/`: Contains all the page routes and layouts using the Next.js App Router.
    -   `/about`: Static pages related to the company's profile.
    -   `/iso-certificates`: Individual pages detailing each ISO certification service.
    -   `/other-certificates`: Pages for non-ISO certifications like HACCP, GMP, etc.
    -   `/contact` & `/enquire`: Pages with forms for user interaction.
    -   `page.tsx`: The main homepage component.
    -   `layout.tsx`: The root layout for the application.
-   `components/`: Contains all reusable React components.
    -   `ui/`: Base UI components from `shadcn/ui`.
    -   `header.tsx`, `footer.tsx`: Site-wide header and footer.
    -   `contact-form.tsx`, `enquire-modal.tsx`: Components for handling user submissions.
    -   `about-layout.tsx`: A shared layout for informational subpages, providing a consistent structure.
-   `lib/`: Core utility functions, including the `cn` helper for Tailwind CSS classes.
-   `hooks/`: Custom React hooks, such as `use-toast` and `use-mobile`.

## Getting Started

To run this project locally, follow the steps below.

### Prerequisites

-   Node.js (v18.0 or later)
-   pnpm package manager

### Installation

1.  Clone the repository to your local machine:
    ```bash
    git clone https://github.com/vitthal-jauhari/MM-Solutions.git
    ```

2.  Navigate to the project directory:
    ```bash
    cd MM-Solutions
    ```

3.  Install the dependencies using `pnpm`:
    ```bash
    pnpm install
    ```

### Running the Development Server

Start the Next.js development server:

```bash
pnpm dev
```

Open your browser and navigate to [http://localhost:3000](http://localhost:3000) to see the application in action.

### Building for Production

To create a production-ready build of the application, run:

```bash
pnpm build
```

The optimized static files will be generated in the `.next` directory. You can then start the production server with:

```bash
pnpm start