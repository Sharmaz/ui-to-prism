import { useState } from 'react';
import { deleteAttr, updateAttr } from '../lib/api';

const Column = ({
  propertie,
  table,
  tables,
  setTables,
}: any) => {
  const [property, setProperty] = useState<any>(propertie);

  return (
    <div className="flex justify-between">
      <input
        className="border-solid border-2 w-1/2 m-2 px-2"
        type="text"
        name="name"
        id=""
        onChange={(e) => setProperty({ ...property, name: e.target.value })}
        onBlur={() => {
          setTables([...tables, ...updateAttr(table, property.id, property)]);
        }}
        value={property.name}
      />
      <input
        className="border-solid border-2 w-1/2 m-2 px-2"
        type="text"
        name="type"
        id=""
        onChange={(e) => setProperty({ ...property, type: e.target.value })}
        onBlur={() => {
          setTables([...tables, ...updateAttr(table, property.id, property)]);
        }}
        value={property.type}
      />
      <button className="button-red m-2" type="button" onClick={() => setTables([...tables, ...deleteAttr(table, propertie.id)])}>Delete</button>
    </div>
  );
};

export default Column;
