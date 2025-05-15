import {defineType, defineField} from 'sanity'

export default defineType({
  name: 'stories',
  title: 'Stories',
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
      title: 'Stories Subpages',
      type: 'array',
      of: [
        { type: 'reference', to: [{ type: 'storySubpage' }] },
      ],
    }),
  ],
  preview: {
    select: {
      title: 'title',
    },
  },
}) 