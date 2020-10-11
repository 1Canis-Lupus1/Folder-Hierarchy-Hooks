import React,{useState} from 'react';
import './App.css';
import Folder from './components/folder';

function App() {
  const [name,setName]=useState([]);

  return (
    <div className="App">
      <div className="box">
        <input type='text' placeholder="Enter a Folder Name" value={name} onChange={e=> setName(e.target.value.trim())} />
        <button onClick={()=> console.log("Added name: ",{name})}>Add Folder</button>
        <Folder value={name}/>
      </div>
    </div>
  );
}

export default App;
