export function createTable(tables) {
  const newTable = {
    id: tables.length + 1,
    name: `table-${tables.length + 1}`,
    properties: [],
    relationships: [],
  };
  return [...tables, newTable];
}

export function findOneTable(tables, id) {
  return tables.find((table) => table.id === id);
}

export function updateTable(tables, id, changes) {
  const tableToUpdate = findOneTable(tables, id);
  const updatedTable = {
    ...tableToUpdate,
    ...changes,
  };

  tables.forEach((table, index) => {
    if (table.id === id) {
      tables.splice(index, 1, updatedTable);
    }
  });

  return [...tables];
}

export function deleteTable(tables, id) {
  tables.forEach((table, index) => {
    if (table.id === id) {
      tables.splice(index, 1);
    }
  });
  return [...tables];
}

export function createAttr(table) {
  const newAttr = {
    id: 1,
    name: 'attribute',
    type: 'type',
  };

  table.properties.push(newAttr);
  return [...table];
}
export function findOneAttr(table, id) {
  return table.properties.find((attr) => attr.id === id);
}

export function updateAttr(table, id, changes) {
  const attrToUpdate = findOneAttr(table, id);
  const updatedAttr = {
    ...attrToUpdate,
    ...changes,
  };

  table.properties.forEach((attribute, index) => {
    if (attribute.id === id) {
      table.properties.splice(index, 1, updatedAttr);
    }
  });

  return [...table];
}
export function deleteAttr(table, id) {
  table.properties.forEach((attribute, index) => {
    if (attribute.id === id) {
      table.properties.splice(index, 1);
    }
  });

  return [...table];
}

export function createRelationship(table) {
  const newRelationship = {
    id: table.relationships.length + 1,
    name: 'attribute',
    table: 'Table',
    field: 'FK',
    reference: 'id',
  };

  table.relationships.push(newRelationship);
  return [...table];
}

export function findOneRelationship(table, id) {
  return table.relationships.find((relationship) => relationship.id === id);
}

export function updateRelationship(table, id, changes) {
  const relationshipToUpdate = findOneAttr(table, id);
  const updatedRelationship = {
    ...relationshipToUpdate,
    ...changes,
  };

  table.relationships.forEach((relationship, index) => {
    if (relationship.id === id) {
      table.relationships.splice(index, 1, updatedRelationship);
    }
  });

  return [...table];
}

export function deleteRelationship(table, id) {
  table.relationships.forEach((relationship, index) => {
    if (relationship.id === id) {
      table.relationships.splice(index, 1);
    }
  });

  return [...table];
}
