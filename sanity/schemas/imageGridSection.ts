import {defineType, defineField} from 'sanity'

export default defineType({
  name: 'imageGridSection',
  title: 'Image Grid Section',
  type: 'object',
  fields: [
    defineField({
      name: 'images',
      title: 'Images',
      type: 'array',
      of: [
        {
          type: 'image',
          fields: [
            { name: 'alt', type: 'string', title: 'Alt Text' },
          ],
        },
      ],
    }),
    defineField({
      name: 'columns',
      title: 'Columns',
      type: 'number',
      options: { list: [2, 3, 4] },
      validation: (Rule) => Rule.required(),
    }),
  ],
}) 