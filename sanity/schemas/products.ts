import {defineType, defineField} from 'sanity'

export default defineType({
  name: 'products',
  title: 'Products',
  type: 'document',
  fields: [
    defineField({
      name: 'label',
      title: 'Label (for Studio only)',
      type: 'string',
      description: 'This is only for internal clarity in Sanity Studio. Not used on the site.',
    }),
    defineField({
      name: 'products',
      title: 'Products',
      type: 'array',
      of: [
        { type: 'reference', to: [{ type: 'productSubpage' }] },
      ],
      validation: (Rule) => Rule.required().min(1),
      description: 'Order the products as you want them displayed.',
    }),
  ],
  preview: {
    select: {
      title: 'label',
    },
    prepare(selection) {
      return {
        title: selection.title || 'Products Page',
      }
    }
  },
}) 