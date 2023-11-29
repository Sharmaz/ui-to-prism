import { useState } from 'react';
import { TableElement } from '../types/definitions';

const Table = ({ table }: TableElement | any) => {
  const [columns, setColumns] = useState<{ attr: string, type: string }[]>([]);
  const handleAddColumns = () => {
    setColumns([...columns, { attr: 'attr', type: 'type' }]);
  };
  return (
    <div>
      <div className="flex justify-between">
        <h2 className="text-xl text-slate-900 font-bold mx-2">{table.name}</h2>
        <button className="button-red m-2" type="button">Delete Table</button>
      </div>
      <div className="flex text-slate-900 font-bold">
        <span className="block w-1/2 mx-2">Attribute</span>
        <span className="block w-1/2 mx-2">Type</span>
      </div>
      {
        table.properties.length
          ? (
            table.properties.map((propertie) => (
              <div className="flex justify-between">
                <input className="border-solid border-2 w-1/2 m-2 px-2" type="text" name="attr" id="" value={propertie.name} />
                <input className="border-solid border-2 w-1/2 m-2 px-2" type="text" name="type" id="" value={propertie.type} />
                <button className="button-red m-2" type="button">Delete</button>
              </div>
            ))
          )
          : null
      }
      {
        columns.length
          ? (
            columns.map((col) => (
              <div className="flex justify-between">
                <input className="border-solid border-2 w-1/2 m-2 px-2" type="text" name={col.attr} id="" />
                <input className="border-solid border-2 w-1/2 m-2 px-2" type="text" name={col.type} id="" />
                <button className="button-red m-2" type="button">Delete</button>
              </div>
            ))
          )
          : null
      }
      <button type="button" onClick={() => handleAddColumns()} className="button-secondary">Add Column</button>
    </div>
  );
};

export default Table;
