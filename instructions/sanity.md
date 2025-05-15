Step 1: Identify All Content to Move to Sanity
Text: Titles, captions, descriptions, button/link text, section text, etc.
Images: All src props, hero images, product images, carousel images, etc.
Section content: Any props passed to section components (e.g. HeroSection, TextSection, ImageSection, etc.)
Step 2: Update Your Sanity Schemas
Make sure every piece of content (text/image) you want to control is represented in your Sanity schemas.
For each section type, add fields for all text and images you want to manage.
Use array of references for lists (e.g. products, images).
Use block for rich text.
Step 3: Update GROQ Queries
In your page-level data fetching (e.g. getStaticProps, getServerSideProps, or server components), update your GROQ queries to fetch all the fields you need from Sanity.
Example: If your homepage has a hero section, fetch its title, image, and description from Sanity.
Step 4: Update SectionRenderer and Section Components
Pass the fetched Sanity data as props to your section components.
Remove all hardcoded text and images from the components themselves.
For images, use the Sanity image asset and urlFor helper.

