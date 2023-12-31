const placeholderTables = [
  {
    id: 1,
    name: 'User',
    properties: [
      {
        id: 3,
        name: 'id',
        type: 'int',
      },
      {
        id: 4,
        name: 'firstName',
        type: 'string',
      },
      {
        id: 5,
        name: 'admin',
        type: 'boolean',
      },
    ],
    relationships: [],
  },
  {
    id: 2,
    name: 'Profile',
    properties: [
      {
        id: 2,
        name: 'id',
        type: 'int',
      },
      {
        id: 3,
        name: 'github',
        type: 'string',
      },
    ],
    relationships: [
      {
        id: 1,
        name: 'user',
        table: 'User',
        field: 'userId',
        reference: 'id',
      },
    ],
  },
];

export default placeholderTables;
