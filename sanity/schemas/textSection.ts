import { defineType, defineField } from 'sanity';

export default defineType({
  name: 'textSection',
  title: 'Text Section',
  type: 'object',
  fields: [
    defineField({ name: 'text', title: 'Text', type: 'text', validation: (Rule) => Rule.required() }),
  ],
}); 