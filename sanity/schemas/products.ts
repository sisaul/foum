import {defineType, defineField} from 'sanity'

export default defineType({
  name: 'products',
  title: 'Products',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
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
    defineField({
      name: 'subpages',
      title: 'Products Subpages',
      type: 'array',
      of: [
        { type: 'reference', to: [{ type: 'productSubpage' }] },
      ],
    }),
  ],
  preview: {
    select: {
      title: 'title',
    },
  },
}) 