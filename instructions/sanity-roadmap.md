# Sanity Integration Roadmap

This roadmap outlines the steps to make the FOUM website fully content-manageable via Sanity.

## Phase 1: Core Setup & Reusables

-   [x] **0. Consolidate Sanity Utilities:**
    -   [x] Consolidate all Sanity utility files (client, image, types, queries) under `lib/sanity/`. Remove any duplicates from `sanity/lib/` and update all imports throughout the app to use the canonical `lib/sanity/` location.
-   [x] **1.1. Review & Finalize Sanity Client:**
    -   [x] Ensure `/lib/sanity/client.ts` (or equivalent) is correctly configured with project ID, dataset, API version, and `useCdn` settings.
    -   [x] Ensure `/lib/sanity/image.ts` (or equivalent for `urlForImage`) is set up for transforming Sanity image assets.
    -   [x] Verify environment variables (`SANITY_PROJECT_ID`, etc.) are correctly set up and used.
-   [x] **1.2. Refine Section Prop Types:**
    -   [x] Create detailed TypeScript interfaces for each section type used in `section-renderer.tsx` (e.g., `HeroSectionProps`, `ImageCarouselProps`). These should match the fields defined in their respective Sanity schemas.
    -   [x] Update `Section` type in `/lib/sanity/types.ts` to be a union of all specific section prop types.
    -   [x] Remove `@ts-expect-error` comments in `section-renderer.tsx` by applying these strong types.
-   [x] **1.3. Centralize Sanity Queries (Optional but Recommended):**
    -   [x] Consolidate common GROQ queries into `/lib/sanity/queries.ts`. This is partially done as per PRD but can be expanded.

## Phase 2: Product Content Management

-   [ ] **2.1. Product Schema Finalization (`sanity/schemas/productSubpage.ts` & `products.ts`):**
    -   [ ] Ensure `productSubpage.ts` defines all necessary fields for an individual product: title, slug, description, price, images (gallery), specifications (e.g., as block content or key-value pairs), related products (reference to other products), SEO fields (meta title, meta description).
    -   [ ] Ensure it includes an array field for `sections` if product pages can have custom layouts using the existing section schemas (e.g., `textSection`, `imageSection`).
    -   [ ] Review `products.ts` (likely for the main products listing page). It should define fields for a title, intro text, and potentially a curated list of featured products if not dynamically showing all.
-   [ ] **2.2. Product Data Fetching:**
    -   [ ] Implement `generateStaticParams` in `app/products/[slug]/page.tsx` to fetch all product slugs.
    -   [ ] In `app/products/[slug]/page.tsx`, fetch data for a single product using its slug from Sanity.
    -   [ ] In `app/products/page.tsx` (the main products listing page), fetch data for all products (or featured ones as per schema).
-   [ ] **2.3. Product Page Rendering (`app/products/[slug]/page.tsx`):**
    -   [ ] If using sections: Pass the fetched `sections` array to `SectionRenderer`.
    -   [ ] If not using sections: Directly map fetched product data (title, description, images, etc.) to dedicated product detail components.
    -   [ ] Ensure all product images use the Sanity image URL builder.
-   [ ] **2.4. Product Listing Page Rendering (`app/products/page.tsx`):**
    -   [ ] Render a grid or list of products using the fetched data. Link each product to its `app/products/[slug]/page.tsx`.
-   [ ] **2.5. Update `featuredProductsSection` Schema & Component:**
    -   [ ] Modify `sanity/schemas/featuredProductsSection.ts` so that the `products` field is an array of references to actual `productSubpage` documents.
    -   [ ] Update the `ProductCarousel` component (used by `featuredProductsSection` in `section-renderer.tsx`) to resolve these references and fetch necessary product details (title, slug, image).

## Phase 3: Homepage Content Management (`app/page.tsx`)

-   [ ] **3.1. Homepage Schema Review (`sanity/schemas/homepage.ts`):**
    -   [ ] Ensure `homepage.ts` has an array field named `sections` (or similar) of type `array` of `object` (where each object is a reference to a section schema or the section data itself, depending on how you've structured `page.sections` in Sanity). It should allow selection from all available section types (e.g., `heroSection`, `textSection`, `featuredProductsSection`).
    -   [ ] Add any other page-specific metadata fields (e.g., SEO title, description).
-   [ ] **3.2. Homepage Data Fetching:**
    -   [ ] In `app/page.tsx`, fetch the `homepage` document from Sanity, ensuring the `sections` array and all its referenced content (if using references) are deeply fetched.
-   [ ] **3.3. Homepage Rendering:**
    -   [ ] Replace all hardcoded content in `app/page.tsx`.
    -   [ ] Pass the fetched `sections` array to the `SectionRenderer` component to dynamically render the homepage content.

## Phase 4: Studio Page Content Management

-   [ ] **4.1. Studio Schemas Finalization (`sanity/schemas/studioSubpage.ts` & `studio.ts`):**
    -   [ ] Ensure `studioSubpage.ts` (for individual studio projects/entries) has fields for: title, slug, date, client, description/body (block content or could be a `sections` array for richer layouts), hero image, an array field named `sections` (if not used for main body) of type `array` of `object` allowing selection from available section types, and SEO fields.
    -   [ ] Ensure `studio.ts` (for the main studio listing page) has fields for a title, intro text, and SEO fields.
-   [ ] **4.2. Studio Data Fetching:**
    -   [ ] Implement `generateStaticParams` in `app/studio/[slug]/page.tsx` to fetch all studio project slugs.
    -   [ ] In `app/studio/[slug]/page.tsx`, fetch data for a single studio project.
    -   [ ] In `app/studio/page.tsx` (main studio listing), fetch data for all studio projects.
-   [ ] **4.3. Studio Page Rendering (`app/studio/[slug]/page.tsx`):**
    -   [ ] Replace hardcoded content.
    -   [ ] Pass the fetched `sections` array (or main content field) to `SectionRenderer` or render directly.
-   [ ] **4.4. Studio Listing Page Rendering (`app/studio/page.tsx`):**
    -   [ ] Render a list/grid of studio projects, linking to their respective detail pages.
    -   [ ] Remove/update the commented-out `SectionRenderer` usage with the actual fetched data if this page itself is section-based, or render a list of project previews.

## Phase 5: Stories Page Content Management

-   [ ] **5.1. Stories Schemas Finalization (`sanity/schemas/storySubpage.ts` & `stories.ts`):**
    -   [ ] Ensure `storySubpage.ts` has fields for: title, slug, publication date, author (optional, could be text or reference to an author schema), hero image, main content (this could be a rich `blockContent` field or a `sections` array for more structured layouts), and SEO fields.
    -   [ ] Ensure `stories.ts` (for the main stories listing page) has fields for a title, intro text, and SEO fields.
-   [ ] **5.2. Stories Data Fetching:**
    -   [ ] Implement `generateStaticParams` in `app/stories/[slug]/page.tsx` to fetch all story slugs.
    -   [ ] In `app/stories/[slug]/page.tsx`, fetch data for a single story.
    -   [ ] In `app/stories/page.tsx` (main stories listing), fetch data for all stories.
-   [ ] **5.3. Story Page Rendering (`app/stories/[slug]/page.tsx`):**
    -   [ ] If using a `sections` array, pass it to `SectionRenderer`.
    -   [ ] Otherwise, render the story content directly (e.g., hero image, title, block content using a portable text renderer).
-   [ ] **5.4. Stories Listing Page Rendering (`app/stories/page.tsx`):**
    -   [ ] Render a list/grid of stories, linking to their detail pages.

## Phase 6: About Page Content Management

-   [ ] **6.1. About Page Schema Review (`sanity/schemas/about.ts`):**
    -   [ ] Ensure `about.ts` has an array field `sections` of type `array` of `object` allowing selection from relevant section types (e.g., `textSection`, `imageSection`, perhaps a new `teamMemberSection`).
    -   [ ] Add any other page-specific metadata (SEO, title).
-   [ ] **6.2. About Page Data Fetching:**
    -   [ ] In `app/about/page.tsx`, fetch the `about` page document from Sanity.
-   [ ] **6.3. About Page Rendering (`app/about/page.tsx`):**
    -   [ ] Pass the fetched `sections` array to `SectionRenderer`.

## Phase 7: Global & Utility Content

-   [ ] **7.1. Navigation Menu:**
    -   [ ] Create a `navigation.ts` schema in Sanity to manage menu items (label, internal link (reference to a page/subpage document) or external URL).
    -   [ ] Fetch this data in `components/layout.tsx` (or your main layout/header component) and render the navigation dynamically.
-   [ ] **7.2. Footer Content:**
    -   [ ] Create a `footer.ts` schema in Sanity for footer links, copyright text, social media links etc.
    -   [ ] Fetch and render this in the layout/footer component.
-   [ ] **7.3. Other Static Pages (Contact, Privacy, Terms):**
    -   [ ] Review `contact.ts`, `privacyPolicy.ts`, `termsAndConditions.ts` schemas. They should likely have a `title` and a `content` (block text using Sanity's portable text editor) field. If more complex layouts are needed, they too can use a `sections` array.
    -   [ ] Fetch data in their respective page components (`app/contact/page.tsx`, etc.) and render the content.

## Phase 8: Testing & Refinement

-   [ ] **8.1. Content Entry in Sanity Studio:**
    -   [ ] Populate Sanity Studio with diverse content for all page types and sections to test thoroughly.
-   [ ] **8.2. Frontend Rendering Test:**
    -   [ ] Verify all pages and sections render correctly with Sanity data.
    -   [ ] Test responsive design across devices.
    -   [ ] Check image loading and optimization (using Sanity's image pipeline).
-   [ ] **8.3. Link Integrity:**
    -   [ ] Ensure all internal links (navigation, product links, story links, etc.) generated from Sanity data are working correctly.
-   [ ] **8.4. ISR/Revalidation:**
    -   [ ] Confirm Next.js Incremental Static Regeneration (ISR) or other caching strategies are working as expected if implemented (e.g., `revalidate` in page components or on-demand revalidation).

This roadmap provides a structured approach. Each phase and step can be broken down further as development progresses.