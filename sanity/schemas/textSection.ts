import { defineType, defineField } from 'sanity';

export default defineType({
  name: 'textSection',
  title: 'Text Section',
  type: 'object',
  fields: [
    defineField({ name: 'content', title: 'Content', type: 'array', of: [{ type: 'block' }] }),
    defineField({ name: 'text', title: 'Text', type: 'string' }),
    defineField({ name: 'align', title: 'Align', type: 'string', options: { list: [ { title: 'Left', value: 'left' }, { title: 'Center', value: 'center' }, { title: 'Right', value: 'right' } ] } }),
    defineField({ name: 'maxWidth', title: 'Max Width', type: 'string' }),
    defineField({ name: 'paddingY', title: 'Padding Y', type: 'string' }),
    defineField({ name: 'width', title: 'Width', type: 'string' }),
    defineField({ name: 'layoutVariant', title: 'Layout Variant', type: 'string', options: { list: [ { title: 'Default', value: 'default' }, { title: 'Studio Intro', value: 'studioIntro' }, { title: 'Title Text', value: 'titleText' } ] } }),
  ],
}); 