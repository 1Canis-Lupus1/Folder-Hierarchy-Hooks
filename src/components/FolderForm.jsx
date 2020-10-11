import React, { useState, useContext } from 'react'
import { FolderListContext } from '../contexts/FolderListContext'

const FolderForm = () => {
  const { addFolder } = useContext(FolderListContext)
  const [title, setTitle] = useState('')

  const handleSubmit = e => {
    e.preventDefault();
    addFolder(title);
    setTitle('');
  }

  const handleChange = e => {
    setTitle(e.target.value)
  }

  return (
    <form onSubmit={handleSubmit} className="form">
      <input
        type="text"
        placeholder="Add a Folder Name"
        value={title}
        onChange={handleChange}
        required
        className="task-input"
      />
    <button type="submit" className="btn add-task-btn">Add Folder</button>
    </form>
  )
}

export default FolderForm