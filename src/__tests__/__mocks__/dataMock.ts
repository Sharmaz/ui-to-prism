const tablesData = [
  {
    id: 1,
    name: 'User',
    properties: [
      {
        id: 3,
        name: 'id',
        type: 'int',
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

export default tablesData;
