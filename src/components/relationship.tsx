import { useState } from 'react';
import { z } from 'zod';
import { deleteRelationship, updateRelationship } from '../lib/api';

const Relationship = ({
  relation,
  table,
  tables,
  setTables,
}: any) => {
  const [relationship, setRelationship] = useState<any>(relation);
  const [errors, setErrors] = useState<any>({});

  const schema = z.object({
    id: z.number({ invalid_type_error: 'id must be a number' }),
    name: z.string({ invalid_type_error: 'name must be a string' }).min(2),
    table: z.string({ invalid_type_error: 'name must be a string' }).min(2),
    field: z.string({ invalid_type_error: 'name must be a string' }).min(2),
    reference: z.string({ invalid_type_error: 'name must be a string' }).min(2),
  });

  const validateFields = () => {
    try {
      const validRelationship = schema.parse(relationship);
      setErrors({});
      setTables([
        ...tables,
        ...updateRelationship(table, validRelationship.id, validRelationship),
      ]);
    } catch (error) {
      if (error instanceof z.ZodError) {
        setErrors(error.flatten().fieldErrors);
      }
    }
  };

  return (
    <div className="flex justify-between relative">
      <input
        className="border-solid border-2 w-1/2 m-2 px-2"
        type="text"
        name="name"
        id=""
        onChange={(e) => setRelationship({ ...relationship, name: e.target.value })}
        onBlur={() => {
          validateFields();
        }}
        value={relationship.name}
      />
      {
        errors.name
          ? <span className="absolute text-red-500 text-sm top-8 left-2">{errors.name}</span>
          : null
      }
      <input
        className="border-solid border-2 w-1/2 m-2 px-2"
        type="text"
        name="type"
        id=""
        onChange={(e) => setRelationship({ ...relationship, table: e.target.value })}
        onBlur={() => {
          validateFields();
        }}
        value={relationship.table}
      />
      {
        errors.table
          ? <span className="absolute text-red-500 text-sm top-8 left-2">{errors.table}</span>
          : null
      }
      <input
        className="border-solid border-2 w-1/2 m-2 px-2"
        type="text"
        name="type"
        id=""
        onChange={(e) => setRelationship({ ...relationship, field: e.target.value })}
        onBlur={() => {
          validateFields();
        }}
        value={relationship.field}
      />
      {
        errors.field
          ? <span className="absolute text-red-500 text-sm top-8 left-2">{errors.field}</span>
          : null
      }
      <input
        className="border-solid border-2 w-1/2 m-2 px-2"
        type="text"
        name="type"
        id=""
        onChange={(e) => setRelationship({ ...relationship, reference: e.target.value })}
        onBlur={() => {
          validateFields();
        }}
        value={relationship.reference}
      />
      {
        errors.reference
          ? <span className="absolute text-red-500 text-sm top-8 left-2">{errors.reference}</span>
          : null
      }
      <button className="button-red m-2" type="button" onClick={() => setTables([...tables, ...deleteRelationship(table, relationship.id)])}>Delete</button>
    </div>
  );
};

export default Relationship;
