import {defineType, defineField} from 'sanity'

export default defineType({
  name: 'termsAndConditions',
  title: 'Terms & Conditions',
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
      options: { source: 'title', maxLength: 96 },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'sections',
      title: 'Sections',
      type: 'array',
      of: [
        { type: 'heroSection' },
        { type: 'imageSection' },
        { type: 'textSection' },
        { type: 'imageCarousel' },
        { type: 'productGridSection' },
        { type: 'productTextSection' },
        { type: 'featuredProductsSection' },
        { type: 'aboutTextSection' },
        { type: 'titleSection' },
        { type: 'titleTextLayoutSection' },
        { type: 'imageGridSection' },
        { type: 'singleImageCarousel' },
      ],
      validation: (Rule) => Rule.required(),
    }),
  ],
  preview: {
    select: {
      title: 'title',
    },
  },
}) 