// userProfile.js
export default {
    name: 'userProfile',
    title: 'User Profile',
    type: 'document',
    fields: [
      {
        name: 'firstName',
        title: 'First Name',
        type: 'string',
        validation: Rule => Rule.required().min(1).max(50),
      },
      {
        name: 'lastName',
        title: 'Last Name',
        type: 'string',
        validation: Rule => Rule.required().min(1).max(50),
      },
      {
        name: 'email',
        title: 'Email',
        type: 'string',
        validation: Rule => Rule.required().email(),
      },
      {
        name: 'role',
        title: 'Role',
        type: 'string',
        options: {
          list: [
            { title: 'User', value: 'user' },
            { title: 'Admin', value: 'admin' },
          ],
        },
        validation: Rule => Rule.required(),
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
  