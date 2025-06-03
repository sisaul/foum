import { defineType, defineField } from 'sanity';

export default defineType({
  name: 'productGridSection',
  title: 'Product Grid Section',
  type: 'object',
  fields: [
    defineField({
      name: 'products',
      title: 'Products',
      type: 'array',
      of: [
        {
          type: 'object',
          name: 'productGridItem',
          title: 'Product',
          fields: [
            { name: 'title', title: 'Title', type: 'string' },
            { name: 'slug', title: 'Slug', type: 'string' },
            { name: 'imageSrc', title: 'Image', type: 'image', options: { hotspot: true } },
            { name: 'basePath', title: 'Base Path', type: 'string' },
          ],
        },
      ],
    }),
    defineField({ name: 'basePath', title: 'Base Path', type: 'string' }),
    defineField({ name: 'hideViewDetailsLink', title: 'Hide View Details Link', type: 'boolean' }),
    defineField({ name: 'largeImages', title: 'Large Images', type: 'boolean' }),
  ],
}); 