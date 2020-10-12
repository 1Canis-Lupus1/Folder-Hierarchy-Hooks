import React, { createContext, useState, useEffect } from 'react'
import uuid from 'uuid'

export const FolderListContext = createContext()

const FolderListContextProvider = props => {
  const initialState = JSON.parse(sessionStorage.getItem('folders')) || []
  const [folders, setFolders] = useState(initialState)

  //Setting to Session Storage:
  useEffect(() => {
    sessionStorage.setItem('folders', JSON.stringify(folders))
  }, [folders])

  // Add folder
  const addFolder = title => {
    // console.log("Title",title)
    setFolders([...folders, { title, id:uuid(), children:[]}])
  }

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