import { useState } from 'react';
import placeholderTables from './lib/placeholder-data';
import Form from './components/form';
import { TableElement } from './types/definitions';
import './app.css';

const App = () => {
  const [tables] = useState<TableElement[]>(placeholderTables);
  return (
    <Form tables={tables} />
  );
};

export default App;
