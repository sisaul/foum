import {defineType, defineField} from 'sanity'

export default defineType({
  name: 'titleSection',
  title: 'Title Section',
  type: 'object',
  fields: [
    defineField({ name: 'title', title: 'Title', type: 'string', validation: (Rule) => Rule.required() }),
    defineField({ name: 'centered', title: 'Centered', type: 'boolean' }),
    defineField({ name: 'date', title: 'Date', type: 'string' }),
    defineField({ name: 'size', title: 'Size', type: 'string', options: { list: [ { title: 'Default', value: 'default' }, { title: 'Small', value: 'small' } ] } }),
    defineField({ name: 'noPadding', title: 'No Padding', type: 'boolean' }),
  ],
}) 