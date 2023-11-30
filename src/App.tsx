import { useState } from 'react';
import placeholderTables from './lib/placeholder-data';
import Form from './components/form';
import { TableElement } from './types/definitions';
import './app.css';

const App = () => {
  const [tables, setTables] = useState<TableElement[]>(placeholderTables);
  return (
    <Form tables={tables} setTables={setTables} />
  );
};

export default App;
