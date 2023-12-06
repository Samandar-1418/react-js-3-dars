// App.js
import { useState } from 'react';
import './App.css';
import Button from './companed/buttun/button';
import Input from './companed/Input/Input';
import List from './companed/list/list';

function App() {
  const [lists, setLists] = useState([]);

  const data = {
    info: 'Malumot Kiriting... ',
    text: "Samandar Nabiyev"
  };

  const handleButtonClick = () => {
    setLists((prevLists) => [...prevLists, <List key={prevLists.length} data={data} />]);
  };

  return (
    <>
      <div className="todo-list">
        <Input data={data} />
        <Button onClick={handleButtonClick} />
        {lists}
      </div>
    </>
  );
}

export default App;
