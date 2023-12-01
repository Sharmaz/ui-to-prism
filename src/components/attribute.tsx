import { useState } from 'react';
import { z } from 'zod';
import { deleteAttr, updateAttr } from '../lib/api';

const Attribute = ({
  propertie,
  table,
  tables,
  setTables,
}: any) => {
  const [property, setProperty] = useState<any>(propertie);
  const [errors, setErrors] = useState<any>({});

  const schema = z.object({
    id: z.number({ invalid_type_error: 'id must be a number' }),
    name: z.string({ invalid_type_error: 'name must be a string' }).min(2),
    type: z.union([z.string().includes('int'), z.string().includes('boolean'), z.string().includes('string')], { invalid_type_error: 'type must be int, boolean or string' }),
  });

  const validateFields = () => {
    try {
      const validProperty = schema.parse(property);
      setErrors({});
      setTables([...tables, ...updateAttr(table, validProperty.id, validProperty)]);
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
        onChange={(e) => setProperty({ ...property, name: e.target.value })}
        onBlur={() => {
          validateFields();
        }}
        value={property.name}
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
        onChange={(e) => setProperty({ ...property, type: e.target.value })}
        onBlur={() => {
          validateFields();
        }}
        value={property.type}
      />
      {
        errors.type
          ? <span className="absolute text-red-500 text-sm top-8 left-2">{errors.type}</span>
          : null
      }
      <button className="button-red m-2" type="button" onClick={() => setTables([...tables, ...deleteAttr(table, propertie.id)])}>Delete</button>
    </div>
  );
};

export default Attribute;
