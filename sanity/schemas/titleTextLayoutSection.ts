import {defineType, defineField} from 'sanity'

export default defineType({
  name: 'titleTextLayoutSection',
  title: 'Title Text Layout Section',
  type: 'object',
  fields: [
    defineField({ name: 'title', title: 'Title', type: 'string', validation: (Rule) => Rule.required() }),
    defineField({ name: 'text', title: 'Text', type: 'text', validation: (Rule) => Rule.required() }),
    defineField({ name: 'textAlign', title: 'Text Align', type: 'string', options: { list: [ { title: 'Left', value: 'left' }, { title: 'Center', value: 'center' }, { title: 'Right', value: 'right' } ] } }),
    defineField({ name: 'titlePosition', title: 'Title Position', type: 'string', options: { list: [ { title: 'Left', value: 'left' }, { title: 'Right', value: 'right' } ] } }),
    defineField({ name: 'verticalAlign', title: 'Vertical Align', type: 'string', options: { list: [ { title: 'Start', value: 'start' }, { title: 'Center', value: 'center' }, { title: 'End', value: 'end' } ] } }),
    defineField({ name: 'maxWidth', title: 'Max Width', type: 'string' }),
  ],
}) 