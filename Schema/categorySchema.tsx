// category.js
export default {
    name: 'category',
    title: 'Category',
    type: 'document',
    fields: [
      {
        name: 'name',
        title: 'Category Name',
        type: 'string',
        validation: Rule => Rule.required().min(1).max(50),
      },
      {
        name: 'description',
        title: 'Description',
        type: 'text',
      },
      {
        name: 'createdAt',
        title: 'Created At',
        type: 'datetime',
        readOnly: true,
        options: {
          dateFormat: 'YYYY-MM-DD',
          timeFormat: 'HH:mm',
        },
      },
    ],
  };
  