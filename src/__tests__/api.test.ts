import {
  createAttr,
  createRelationship,
  createTable,
  deleteAttr,
  deleteRelationship,
  deleteTable,
  updateAttr,
  updateRelationship,
  updateTable,
} from '../lib/api';

import tablesData from './__mocks__/dataMock';

let data;

beforeEach(() => {
  data = [...tablesData];
});

describe('Tables CRUD', () => {
  test('Table should created', () => {
    const newData = createTable(data);
    expect(newData).toHaveLength(3);
  });

  test('Table should be update', () => {
    const updatedData = updateTable(data, 1, { name: 'Admin' });
    expect(updatedData[0].name).toBe('Admin');
  });

  test('Table should be deleted', () => {
    const updatedData = deleteTable(data, 1);
    expect(updatedData).toHaveLength(1);
  });
});

describe('Attributes CRUD', () => {
  test('Attribute should be created', () => {
    const newData = [...data, ...createAttr(data[0])];
    expect(newData[0].properties).toHaveLength(2);
  });

  test('Attribute should be updated', () => {
    const updatedData = [...data, ...updateAttr(data[0], 3, { id: 3, name: 'uuid', type: 'int' })];
    expect(updatedData[0].properties[0].name).toBe('uuid');
  });

  test('Attribute should be deleted', () => {
    const updatedData = [...data, ...deleteAttr(data[0], 2)];
    expect(updatedData[0].properties).toHaveLength(1);
  });
});

describe('Relationship CRUD', () => {
  test('Relationship should be created', () => {
    const newData = [...data, ...createRelationship(data[0])];
    expect(newData[0].relationships).toHaveLength(1);
  });

  test('Relationship should be updated', () => {
    const updatedData = [...data, ...updateRelationship(data[0], 1, {
      id: 1,
      name: 'profile',
      table: 'Profile',
      field: 'profileId',
      reference: 'id',
    })];
    expect(updatedData[0].relationships[0].table).toBe('Profile');
  });

  test('Relationship should be deleted', () => {
    const updatedData = [...data, ...deleteRelationship(data[0], 1)];
    expect(updatedData[0].relationships).toHaveLength(0);
  });
});
