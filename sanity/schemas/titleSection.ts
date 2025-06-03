import {defineType, defineField} from 'sanity'

export default defineType({
  name: 'titleSection',
  title: 'Title Section',
  type: 'object',
  fields: [
    defineField({ name: 'title', title: 'Title', type: 'string', validation: (Rule) => Rule.required() }),
    defineField({ name: 'date', title: 'Date', type: 'string', validation: (Rule) => Rule.required() }),
  ],
}) 