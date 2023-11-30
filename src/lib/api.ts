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
  const singleTable = tables.find((table) => table.id === id);
  return singleTable;
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
