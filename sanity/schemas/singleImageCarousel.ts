import {defineType, defineField} from 'sanity'

export default defineType({
  name: 'singleImageCarousel',
  title: 'Single Image Carousel',
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
  ],
}) 