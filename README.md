# Foum

A modern e-commerce and portfolio website built with Next.js, TypeScript, Tailwind CSS, and Sanity.io.

## Project Structure

```
/
├── app/                           # Next.js App Router for pages
│   ├── api/                       # API routes (e.g., form submissions)
│   │   └── contact/               # Contact form submission handler
│   │       └── route.ts
│   │
│   ├── about/                     # About page
│   │   └── page.tsx
│   │
│   ├── contact/                   # Contact page
│   │   └── page.tsx
│   │
│   ├── products/                  # Products pages
│   │   ├── [slug]/                # Dynamic product page
│   │   │   └── page.tsx
│   │   └── page.tsx               # Products listing page
│   │
│   ├── stories/                   # Stories/blog pages
│   │   ├── [slug]/                # Dynamic story page
│   │   │   └── page.tsx
│   │   └── page.tsx               # Stories listing page
│   │
│   ├── studio/                    # Studio (portfolio) pages
│   │   ├── [slug]/                # Dynamic project page
│   │   │   └── page.tsx
│   │   └── page.tsx               # Studio listing page
│   │
│   ├── layout.tsx                 # Root layout (global styles, Header, Footer)
│   ├── globals.css                # Global CSS styles (Tailwind imports)
│   └── page.tsx                   # Homepage
│
├── components/                    # React components
│   ├── grids/                     # Grid layout components
│   │   ├── blog-grid.tsx          # Grid for blog posts (Stories)
│   │   ├── product-grid.tsx       # Grid for products (TwoProductGrid)
│   │   └── image-grid.tsx         # Grid for images (ImageGrid)
│   │
│   ├── sections/                  # Modular section components
│   │   ├── hero-section.tsx       # Hero section (ShowroomSection)
│   │   ├── image-section.tsx      # Single image section
│   │   ├── image-carousel.tsx     # Carousel section (ImageCarousel)
│   │   ├── product-grid-section.tsx # Two-product grid (TwoProductGrid)
│   │   ├── product-text-section.tsx # Product + text grid (ProductTextGrid)
│   │   ├── text-section.tsx       # Text section (TextBlock)
│   │   ├── project-preview-section.tsx # Project preview (ProjectPreview)
│   │   └── section-renderer.tsx   # Dynamically renders sections from Sanity
│   │
│   ├── ui/                        # Base UI components
│   │   ├── button.tsx             # Button component
│   │   ├── input.tsx              # Input component
│   │   ├── textarea.tsx           # Textarea component
│   │   └── link.tsx               # Custom Link component
│   │
│   ├── layout/                    # Layout components
│   │   ├── header.tsx             # Header component
│   │   ├── navbar.tsx             # Navigation bar
│   │   ├── footer.tsx             # Footer component
│   │   └── newsletter-banner.tsx  # Newsletter signup banner
│   │
│   ├── cards/                     # Card components for lists
│   │   ├── product-card.tsx       # Product card
│   │   ├── story-card.tsx         # Story/blog card
│   │   └── project-card.tsx       # Project card (ProjectPreview)
│   │
│   └── forms/                     # Form components
│       └── contact-form.tsx       # Contact form component
│
├── lib/                           # Utilities and Sanity integration
│   ├── sanity/                    # Sanity-specific utilities
│   │   ├── client.ts              # Sanity client configuration
│   │   ├── queries.ts             # Reusable GROQ queries
│   │   ├── url-builder.ts         # Image URL builder (urlFor)
│   │   └── types.ts               # TypeScript types for Sanity schemas
│   │
│   └── utils/                     # General utilities
│       ├── fetch-data.ts          # Data fetching helpers
│       ├── formatters.ts          # Formatting functions (e.g., dates)
│       └── constants.ts           # Constants (e.g., navigation links)
│
├── sanity/                        # Sanity Studio configuration
│   ├── schemas/                   # Schema definitions
│   │   ├── project.ts             # Project schema with sections
│   │   ├── product.ts             # Product schema
│   │   ├── story.ts               # Story schema
│   │   ├── category.ts            # Category schema
│   │   ├── homepage.ts            # Homepage schema
│   │   └── schema.ts              # Main schema file
│   │
│   ├── sanity.json                # Sanity configuration
│   └── deskStructure.js           # Custom Studio navigation
│
├── public/                        # Static assets
│   ├── images/                    # Static images (e.g., logo)
│   └── fonts/                     # Custom fonts (e.g., Montserrat)
│
├── styles/                        # Additional styles
│   ├── fonts.css                  # Font imports (e.g., Montserrat)
│   └── custom.css                 # Custom CSS (if needed)
│
├── next.config.ts                 # Next.js configuration
├── package.json                   # Project dependencies and scripts
├── tailwind.config.ts             # Tailwind CSS configuration
├── tsconfig.json                  # TypeScript configuration
└── README.md                      # Project documentation
```

## Getting Started

1. Clone the repository
2. Install dependencies:
   ```bash
   npm install
   ```
3. Set up environment variables:
   ```
   NEXT_PUBLIC_SANITY_PROJECT_ID=your-project-id
   NEXT_PUBLIC_SANITY_DATASET=production
   ```
4. Run the development server:
   ```bash
   npm run dev
   ```

## Features

- Modern UI with Tailwind CSS
- Content management with Sanity.io
- Dynamic pages for products, stories, and projects
- Modular section-based page builder
- Responsive design for all devices
- TypeScript for type safety
- SEO optimized

## Technologies

- Next.js 15
- React 19
- TypeScript
- Tailwind CSS
- Sanity.io
