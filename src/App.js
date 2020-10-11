import React,{useState} from 'react';
import './App.css';
import Folder from './components/folder';

function App() {
  const [name,setName]=useState([]);

  return (
    <div className="App">
      <div className="box">
        <input type='text' placeholder="Enter a Folder Name" value={name} onChange={e=> setName(e.target.value)} />
        <button >Add Folder</button>
        <br/><h3>Input Field Value: {name}</h3>
        <Folder />
      </div>
    </div>
  );
}

export default App;
