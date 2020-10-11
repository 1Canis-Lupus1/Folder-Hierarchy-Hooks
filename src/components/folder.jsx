import React,{useState} from 'react';
import './folder.css'

function Folder(props){
    const [folders,setFolder]=useState([]);
    
    //For Changing background of individual tags
    const [color,setColor]=useState("none");
    // const [selectColor,setSelectColor]=useState("none");
    const [select,setSelect]=useState(false);

    const handleClick=(e)=>{
        console.dir(e.target.attributes.style.value);//Gives the background color 
        console.dir(e.target.attributes.value.nodeValue);//Return the current value of select, i.e false

        //This is not changing the color based on condition 
        if(!(e.target.attributes.value.nodeValue)){
            setColor("lightblue");
        }

    }

    return(
        <React.Fragment>
        {/* <h1>Linked</h1> */}
        <div className="display">
          <ul>
            <h4>Name received in Child via props:{props.value}</h4>
            <li className="root-folder" >Root Folder 1.0 
                <ul >
                    <li className="sub-folder" style={{background:color}} value={select} onClick={e=>{handleClick(e)}}>Sub Folder 1.1</li>
                </ul>
            </li>

            {/* <li className="root-folder">Root Folder 2.0 <ul ><li  className="sub-folder" style={{background:color}} onClick={(e)=>{e.target && setColor("lightblue")}}>Sub Folder 2.1</li></ul></li>

            <li className="root-folder">Root Folder 3.0 <ul ><li  className="sub-folder" style={{background:color}} onClick={(e)=>{console.log(e.target);e.target.setColor("lightblue")}}>Sub Folder 3.1</li></ul></li> */}
          </ul>
        </div>
        </React.Fragment>
    )
}

export default Folder;