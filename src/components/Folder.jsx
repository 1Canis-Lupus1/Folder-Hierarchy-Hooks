import React, { useContext } from 'react'
import { FolderListContext } from '../contexts/FolderListContext'

const Folder = ({ folder }) => {
  const { findItem } = useContext(FolderListContext)
  return (
    <li className="list-item">
      <span>{folder.title} </span>
    </li>
  )
}

export default Folder;