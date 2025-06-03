import { defineType, defineField } from 'sanity';

export default defineType({
  name: 'imageSection',
  title: 'Image Section',
  type: 'object',
  fields: [
    defineField({
      name: 'image',
      title: 'Image',
      type: 'image',
      fields: [
        { name: 'alt', type: 'string', title: 'Alt Text' },
      ],
      options: { hotspot: true },
    }),
  ],
}); 