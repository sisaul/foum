import {defineType, defineField} from 'sanity'

export default defineType({
  name: 'stories',
  title: 'Stories',
  type: 'document',
  fields: [
    defineField({
      name: 'subpages',
      title: 'Stories Subpages',
      type: 'array',
      of: [
        { type: 'reference', to: [{ type: 'storySubpage' }] },
      ],
      validation: (Rule) => Rule.required().min(1),
      description: 'Order the stories as you want them displayed.',
    }),
  ],
  preview: {
    prepare() {
      return {
        title: 'Stories Page',
      }
    }
  },
}) 