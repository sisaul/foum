import {defineType, defineField} from 'sanity'

export default defineType({
  name: 'titleTextLayoutSection',
  title: 'Title Text Layout Section',
  type: 'object',
  fields: [
    defineField({ name: 'title', title: 'Title', type: 'string', validation: (Rule) => Rule.required() }),
    defineField({ name: 'text', title: 'Text', type: 'text', validation: (Rule) => Rule.required() }),
  ],
}) 