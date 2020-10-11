import React, { createContext, useState, useEffect } from 'react'


export const FolderListContext = createContext()

const FolderListContextProvider = props => {
  const initialState = JSON.parse(localStorage.getItem('folders')) || []

  const [folders, setFolders] = useState(initialState)

  //Setting to Local Storage:
  useEffect(() => {
    localStorage.setItem('folders', JSON.stringify(folders))
  }, [folders])

  const [editItem, setEditItem] = useState(null)

  // Add tasks
  const addFolder = title => {
    setFolders([...folders, { title}])
  }

//   // Find task
//   const findItem = id => {
//     const item = tasks.find(task => task.id === id)

//     setEditItem(item)
//   }

  return (
    <FolderListContext.Provider
      value={{
        folders,
        addFolder
      }}                
    >
      {props.children}
    </FolderListContext.Provider>
  )
}

export default FolderListContextProvider