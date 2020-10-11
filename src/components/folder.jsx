import React,{useState} from 'react';

function Folder(){
    const [color,setColor]=useState("none");

    return(
        <React.Fragment>
        {/* <h1>Linked</h1> */}
        <div className="display">
          <ul>
            <li className="root-folder" >Root Folder 1.0 <ul ><li className="sub-folder" style={{background:color}} onClick={()=>setColor("lightblue")}>Sub Folder 1.1</li></ul></li>
            <li className="root-folder">Root Folder 2.0 <ul ><li  className="sub-folder" style={{background:color}} onClick={()=>setColor("red")}>Sub Folder 2.1</li></ul></li>
            <li className="root-folder">Root Folder 3.0 <ul ><li  className="sub-folder" style={{background:color}} onClick={(e)=>setColor("red")}>Sub Folder 3.1</li></ul></li>
          </ul>
        </div>
        </React.Fragment>
    )
}

export default Folder;