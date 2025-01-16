// product.js
export default {
    name: 'product',
    title: 'Product',
    type: 'document',
    fields: [
      {
        name: 'name',
        title: 'Product Name',
        type: 'string',
        validation: Rule => Rule.required().min(1).max(100),
      },
      {
        name: 'description',
        title: 'Description',
        type: 'text',
        validation: Rule => Rule.required().min(10),
      },
      {
        name: 'price',
        title: 'Price',
        type: 'number',
        validation: Rule => Rule.required().min(0),
      },
      {
        name: 'category',
        title: 'Category',
        type: 'reference',
        to: [{ type: 'category' }],
        validation: Rule => Rule.required(),
      },
      {
        name: 'stock',
        title: 'Stock',
        type: 'number',
        validation: Rule => Rule.required().min(0),
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
  
