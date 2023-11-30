import { useState } from 'react';
import { TableElement } from '../types/definitions';
import {
  deleteTable,
  updateTable,
  createAttr,
  createRelationship,
} from '../lib/api';
import Attribute from './attribute';
import Relationship from './relationship';

const Table = ({ table, tables, setTables }: TableElement | any) => {
  const [tableName, setTableName] = useState<string>(table.name);
  const [editName, setEditName] = useState<string>('');

  return (
    <div>
      <div className="flex justify-between">
        <h2 className={`text-xl text-slate-900 font-bold mx-2 ${editName ? 'hidden' : 'block'}`}>{tableName}</h2>
        <input
          className={`border-solid border-2 w-1/2 m-2 px-2 ${editName ? 'block' : 'hidden'}`}
          onChange={(e) => {
            setTableName(e.target.value);
          }}
          onBlur={() => {
            setEditName('');
            setTables(updateTable(tables, table.id, { name: tableName }));
          }}
          type="text"
          name=""
          id=""
          value={tableName}
        />
        <button className="button-blue m-2" type="button" onClick={() => setEditName('yes')}>Edit Table</button>
        <button className="button-red m-2" type="button" onClick={() => setTables(deleteTable(tables, table.id))}>Delete Table</button>
      </div>
      {
        table.properties.length
          ? (
            <div>
              <div className="flex text-slate-900 font-bold">
                <span className="block w-1/2 mx-2">Attribute</span>
                <span className="block w-1/2 mx-2">Type</span>
              </div>
              {
              table.properties.map((propertie) => (
                <Attribute
                  key={propertie.id}
                  propertie={propertie}
                  table={table}
                  tables={tables}
                  setTables={setTables}
                />
              ))
            }
            </div>
          )
          : null
      }
      {
        table.relationships.length
          ? (
            <div>
              <div className="flex text-slate-900 font-bold">
                <span className="block mx-2">Attribute</span>
                <span className="block mx-2">Table</span>
                <span className="block mx-2">Field</span>
                <span className="block mx-2">Reference</span>
              </div>
              {
                table.relationships.map((relationship) => (
                  <Relationship
                    key={relationship.id}
                    relation={relationship}
                    table={table}
                    tables={tables}
                    setTables={setTables}
                  />
                ))
              }
            </div>
          )
          : null
      }
      <button
        type="button"
        onClick={() => {
          setTables([...tables, ...createAttr(table)]);
        }}
        className="button-secondary"
      >
        Add Column
      </button>
      <button
        type="button"
        onClick={() => {
          setTables([...tables, ...createRelationship(table)]);
        }}
        className="button-secondary"
      >
        Add Relationship
      </button>
    </div>
  );
};

export default Table;
