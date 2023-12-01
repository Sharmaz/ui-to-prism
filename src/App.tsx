import { useState } from 'react';
import placeholderTables from './lib/placeholder-data';
import Form from './components/form';
import Snippet from './components/snippet';
import { TableElement } from './types/definitions';
import './app.css';

const App = () => {
  const [tables, setTables] = useState<TableElement[]>(placeholderTables);
  return (
    <div className="flex justify-around">
      <Form tables={tables} setTables={setTables} />
      <Snippet tables={tables} />
    </div>
  );
};

export default App;
