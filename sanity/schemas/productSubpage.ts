import { defineType, defineField, defineArrayMember } from 'sanity';

// Define new schema type for Downloadable Assets Accordion Section
const downloadableAssetsSection = defineType({
  name: 'downloadableAssetsSection',
  title: 'Downloadable Assets Section',
  type: 'object',
  fields: [
    defineField({ name: 'title', title: 'Section Title', type: 'string', validation: (Rule) => Rule.required() }),
    defineField({
      name: 'assets',
      title: 'Assets',
      type: 'array',
      of: [
        defineArrayMember({
          type: 'object',
          fields: [
            defineField({ name: 'type', type: 'string', title: 'Asset Type', description: 'e.g. Technical Drawing, Images', validation: (Rule) => Rule.required() }),
            defineField({
              name: 'files',
              title: 'Files',
              type: 'array',
              of: [defineArrayMember({ type: 'file' })],
              validation: (Rule) => Rule.required().min(1),
            }),
          ],
        }),
      ],
      description: 'List of downloadable assets for this section.',
      validation: (Rule) => Rule.required().min(1),
    }),
  ],
});

// Define new schema type for FAQ Accordion Section
const faqSection = defineType({
  name: 'faqSection',
  title: 'FAQ Section',
  type: 'object',
  fields: [
    defineField({ name: 'title', title: 'Section Title', type: 'string', validation: (Rule) => Rule.required() }),
    defineField({
      name: 'items',
      title: 'FAQ Items',
      type: 'array',
      of: [
        defineArrayMember({
          type: 'object',
          fields: [
            defineField({ name: 'question', type: 'string', title: 'Question', validation: (Rule) => Rule.required() }),
            defineField({ name: 'answer', type: 'text', title: 'Answer', validation: (Rule) => Rule.required() }),
          ],
        }),
      ],
      description: 'Frequently asked questions for this section.',
      validation: (Rule) => Rule.required().min(1),
    }),
  ],
});

// Define new schema type for Find Us In Accordion Section
const findUsInSection = defineType({
  name: 'findUsInSection',
  title: 'Find Us In Section',
  type: 'object',
  fields: [
    defineField({ name: 'title', title: 'Section Title', type: 'string', validation: (Rule) => Rule.required() }),
    defineField({
      name: 'locations',
      title: 'Locations',
      type: 'array',
      of: [
        defineArrayMember({
          type: 'object',
          fields: [
            defineField({ name: 'name', type: 'string', title: 'Location Name', validation: (Rule) => Rule.required() }),
            defineField({ name: 'details', type: 'text', title: 'Details (e.g., Address)' }),
          ],
        }),
      ],
      description: 'List of locations with details.',
      validation: (Rule) => Rule.required().min(1),
    }),
  ],
});

export default defineType({
  name: 'productSubpage',
  title: 'Product Subpage',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'title',
        maxLength: 96,
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'description',
      title: 'Description',
      type: 'text',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'mainImage',
      title: 'Main Image',
      type: 'image',
      options: { hotspot: true },
      fields: [
        { name: 'alt', type: 'string', title: 'Alternative Text' },
      ],
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'images',
      title: 'Images',
      type: 'array',
      of: [
        defineArrayMember({
          type: 'image',
          options: { hotspot: true },
          fields: [
            { name: 'alt', type: 'string', title: 'Alternative Text' },
          ],
        }),
      ],
    }),
    defineField({
      name: 'materials',
      title: 'Materials',
      type: 'array',
      of: [
        defineArrayMember({
          type: 'object',
          fields: [
            defineField({ name: 'color', type: 'string', title: 'Color (hex or name)' }),
            defineField({ name: 'name', type: 'string', title: 'Material Name' }),
          ],
        }),
      ],
      validation: (Rule) => Rule.required().min(1),
      description: 'List of available materials for this product.'
    }),
    defineField({
      name: 'sizes',
      title: 'Available Sizes',
      type: 'array',
      of: [defineArrayMember({ type: 'string' })],
      validation: (Rule) => Rule.required().min(1),
      description: 'List of available sizes for this product.'
    }),
    defineField({
      name: 'accordionSections',
      title: 'Accordion Sections',
      type: 'array',
      of: [
        { type: downloadableAssetsSection.name },
        { type: faqSection.name },
        { type: findUsInSection.name },
      ],
      description: 'Add and order the accordion sections for this product page.',
    }),
    defineField({
      name: 'relatedProductsTitle',
      title: 'Related Products Section Title',
      type: 'string',
      description: 'Title for the Related Products section (e.g., DISCOVER MORE)',
    }),
    defineField({
      name: 'relatedProducts',
      title: 'Related Products',
      type: 'array',
      of: [{ type: 'reference', to: { type: 'productSubpage' } }],
    }),
  ],
  preview: {
    select: {
      title: 'title',
      media: 'mainImage',
    },
  },
});

// Export the new types so they can be included in the main schema.ts
export { downloadableAssetsSection, faqSection, findUsInSection }; 