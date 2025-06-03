import { defineType, defineField } from 'sanity';

export default defineType({
  name: 'featuredProductsSection',
  title: 'Featured Products Section',
  type: 'object',
  fields: [
    defineField({ name: 'title', title: 'Title', type: 'string' }),
    defineField({
      name: 'products',
      title: 'Products',
      type: 'array',
      of: [
        {
          type: 'object',
          name: 'featuredProduct',
          title: 'Product',
          fields: [
            { name: 'title', title: 'Title', type: 'string' },
            { name: 'slug', title: 'Slug', type: 'string' },
            { name: 'imageSrc', title: 'Image', type: 'image', options: { hotspot: true } },
          ],
        },
      ],
    }),
  ],
}); 