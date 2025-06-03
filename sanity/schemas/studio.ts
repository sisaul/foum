import {defineType, defineField} from 'sanity'

export default defineType({
  name: 'studio',
  title: 'Studio',
  type: 'document',
  fields: [
    defineField({
      name: 'introText',
      title: 'Intro Text',
      type: 'text',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'subpages',
      title: 'Studio Subpages',
      type: 'array',
      of: [
        { type: 'reference', to: [{ type: 'studioSubpage' }] },
      ],
      validation: (Rule) => Rule.required().min(1),
      description: 'Order the studio subpages as you want them displayed.',
    }),
  ],
  preview: {
    prepare() {
      return {
        title: 'Studio Page',
      }
    }
  },
}) 