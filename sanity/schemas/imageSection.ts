import { defineType, defineField } from 'sanity';

export default defineType({
  name: 'imageSection',
  title: 'Image Section',
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
    defineField({ name: 'caption', title: 'Caption', type: 'string' }),
    defineField({ name: 'fullWidth', title: 'Full Width', type: 'boolean' }),
    defineField({ name: 'layout', title: 'Layout', type: 'string', options: { list: [ { title: 'Grid', value: 'grid' }, { title: 'Single', value: 'single' } ] } }),
    defineField({ name: 'columns', title: 'Columns', type: 'number', options: { list: [2, 3, 4] } }),
  ],
}); 