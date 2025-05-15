import { defineType, defineField } from 'sanity';

export default defineType({
  name: 'heroSection',
  title: 'Hero Section',
  type: 'object',
  fields: [
    defineField({
      name: 'image',
      title: 'Image',
      type: 'image',
      options: { hotspot: true },
      fields: [
        { name: 'alt', type: 'string', title: 'Alt Text' },
      ],
    }),
    defineField({ name: 'title', title: 'Title', type: 'string' }),
    defineField({ name: 'darkMode', title: 'Dark Mode', type: 'boolean' }),
  ],
}); 