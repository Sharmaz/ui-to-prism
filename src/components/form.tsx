import Table from './table';
import { TableElement } from '../types/definitions';

const Form = ({ tables }: TableElement[] | any) => (
  <div className="w-[300px]">
    <form action="">
      <div className="flex justify-between my-4">
        <span className="text-slate-900 font-bold text-2xl mx-2">Tables</span>
        <button type="button" className="button-primary mx-2">Create Table</button>
      </div>
      {
        tables.length
          ? tables.map((table) => (
            <Table table={table} />
          ))
          : null
      }
    </form>
  </div>
);

export default Form;
