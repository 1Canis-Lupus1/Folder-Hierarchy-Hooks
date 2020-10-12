import React, { createContext, useState, useEffect } from 'react'
import uuid from 'uuid'

export const FolderListContext = createContext()

const FolderListContextProvider = props => {
  const initialState = JSON.parse(localStorage.getItem('folders')) || []

  const [folders, setFolders] = useState(initialState)
  const [editItem, setEditItem] = useState(null)

  //Setting to Local Storage:
  useEffect(() => {
    localStorage.setItem('folders', JSON.stringify(folders))
  }, [folders])

  // Add folder
  const addFolder = title => {
    console.log("Title",title)
    setFolders([...folders, { title, id:uuid()}])
  }

  // Find folder
  const findItem = id => {
    const item = folders.find(folders => folders.id === id)

    setEditItem(item)
  }

  return (
    <FolderListContext.Provider
      value={{
        folders,
        addFolder,
        findItem
      }}                
    >
      {props.children}
    </FolderListContext.Provider>
  )
}

export default FolderListContextProvider