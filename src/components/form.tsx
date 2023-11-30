import Table from './table';
import { createTable } from '../lib/api';
import { TableElement } from '../types/definitions';

const Form = ({ tables, setTables }: TableElement[] | any) => (
  <div className="w-[400px]">
    <form action="">
      <div className="flex justify-between my-4">
        <span className="text-slate-900 font-bold text-2xl mx-2">Tables</span>
        <button type="button" onClick={() => setTables(createTable(tables))} className="button-primary mx-2">Create Table</button>
      </div>
      {
        tables.length
          ? tables.map((table) => (
            <Table key={table.id} table={table} tables={tables} setTables={setTables} />
          ))
          : null
      }
    </form>
  </div>
);

export default Form;
