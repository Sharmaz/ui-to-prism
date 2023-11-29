const placeholderTables = [
  {
    id: 1,
    name: 'user',
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
    name: 'profile',
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
        table: 'user',
        foreingKey: 'id',
      },
    ],
  },
];

export default placeholderTables;
