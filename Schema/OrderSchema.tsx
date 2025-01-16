// order.js
export default {
    name: 'order',
    title: 'Order',
    type: 'document',
    fields: [
      {
        name: 'user',
        title: 'User',
        type: 'reference',
        to: [{ type: 'userProfile' }],
        validation: Rule => Rule.required(),
      },
      {
        name: 'products',
        title: 'Products',
        type: 'array',
        of: [
          {
            type: 'object',
            fields: [
              {
                name: 'product',
                title: 'Product',
                type: 'reference',
                to: [{ type: 'product' }],
              },
              {
                name: 'quantity',
                title: 'Quantity',
                type: 'number',
                validation: Rule => Rule.required().min(1),
              },
            ],
          },
        ],
      },
      {
        name: 'totalAmount',
        title: 'Total Amount',
        type: 'number',
        validation: Rule => Rule.required().min(0),
      },
      {
        name: 'orderStatus',
        title: 'Order Status',
        type: 'string',
        options: {
          list: [
            { title: 'Pending', value: 'pending' },
            { title: 'Shipped', value: 'shipped' },
            { title: 'Delivered', value: 'delivered' },
            { title: 'Cancelled', value: 'cancelled' },
          ],
        },
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
  