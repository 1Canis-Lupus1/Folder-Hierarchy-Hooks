import React,{useState} from 'react';
import './App.css';

function App() {
  const [color,setColor]=useState("white");

  return (
    <div className="App">
      <div className="box">
        <input type='text' placeholder="Enter a Folder Name" />
        <button>Add Folder</button>
        <div className="display">
          <ul>
            <li className="root-folder" onClick={()=> setColor("white")}>Root Folder 1.0 <ul ><li className="sub-folder">Sub Folder 1.1</li></ul></li>
            <li className="root-folder">Root Folder 2.0 <ul ><li  className="sub-folder">Sub Folder 2.1</li></ul></li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default App;
