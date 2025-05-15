import { defineType, defineField } from 'sanity';

export default defineType({
  name: 'productTextSection',
  title: 'Product Text Section',
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
    defineField({ name: 'description', title: 'Description', type: 'text' }),
    defineField({
      name: 'link',
      title: 'Link',
      type: 'object',
      fields: [
        { name: 'href', title: 'Href', type: 'string' },
        { name: 'text', title: 'Text', type: 'string' },
      ],
    }),
    defineField({ name: 'alignTop', title: 'Align Top', type: 'boolean' }),
  ],
}); 