import React, { useContext } from 'react'
import { FolderListContext } from '../contexts/FolderListContext'

const Folder = ({ folders }) => {
  const { addFolder } = useContext(FolderListContext)
  // console.log("Title2:",addFolder)
  return (
    <li className="list-item">
      <span>{folders.title} </span>
      {console.log(folders.id)}
    </li>
  )
}

export default Folder;