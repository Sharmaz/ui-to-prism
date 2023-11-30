import { useState } from 'react';
import { deleteRelationship, updateRelationship } from '../lib/api';

const Relationship = ({
  relation,
  table,
  tables,
  setTables,
}: any) => {
  const [relationship, setRelationship] = useState<any>(relation);

  return (
    <div className="flex justify-between">
      <input
        className="border-solid border-2 w-1/2 m-2 px-2"
        type="text"
        name="name"
        id=""
        onChange={(e) => setRelationship({ ...relationship, name: e.target.value })}
        onBlur={() => {
          setTables([...tables, ...updateRelationship(table, relationship.id, relationship)]);
        }}
        value={relationship.name}
      />
      <input
        className="border-solid border-2 w-1/2 m-2 px-2"
        type="text"
        name="type"
        id=""
        onChange={(e) => setRelationship({ ...relationship, table: e.target.value })}
        onBlur={() => {
          setTables([...tables, ...updateRelationship(table, relationship.id, relationship)]);
        }}
        value={relationship.table}
      />
      <input
        className="border-solid border-2 w-1/2 m-2 px-2"
        type="text"
        name="type"
        id=""
        onChange={(e) => setRelationship({ ...relationship, field: e.target.value })}
        onBlur={() => {
          setTables([...tables, ...updateRelationship(table, relationship.id, relationship)]);
        }}
        value={relationship.field}
      />
      <input
        className="border-solid border-2 w-1/2 m-2 px-2"
        type="text"
        name="type"
        id=""
        onChange={(e) => setRelationship({ ...relationship, reference: e.target.value })}
        onBlur={() => {
          setTables([...tables, ...updateRelationship(table, relationship.id, relationship)]);
        }}
        value={relationship.reference}
      />
      <button className="button-red m-2" type="button" onClick={() => setTables([...tables, ...deleteRelationship(table, relationship.id)])}>Delete</button>
    </div>
  );
};

export default Relationship;
