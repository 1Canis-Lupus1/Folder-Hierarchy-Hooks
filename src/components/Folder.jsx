import React, { useContext } from 'react'
import { FolderListContext } from '../contexts/FolderListContext'

const Folder = ({ folders }) => {
  const { addFolder } = useContext(FolderListContext)
  // console.log("Folders",folders)
  // console.log("Key",folders.id)
  const handleClick=(e)=>{
    console.log("Clicked",e.target.key);
    // if(folders.id===)
  }

  return (
    <li className="list-item" key={folders.id} onClick={handleClick}>
      {folders.title} 
    </li>
  )
}

export default Folder;