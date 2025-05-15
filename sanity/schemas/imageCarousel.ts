import { defineType, defineField } from 'sanity';

export default defineType({
  name: 'imageCarousel',
  title: 'Image Carousel',
  type: 'object',
  fields: [
    defineField({
      name: 'items',
      title: 'Items',
      type: 'array',
      of: [
        {
          type: 'object',
          name: 'carouselItem',
          title: 'Carousel Item',
          fields: [
            { name: 'title', title: 'Title', type: 'string' },
            { name: 'slug', title: 'Slug', type: 'string' },
            { name: 'imageSrc', title: 'Image', type: 'image', options: { hotspot: true } },
          ],
        },
      ],
    }),
    defineField({ name: 'title', title: 'Title', type: 'string' }),
  ],
}); 