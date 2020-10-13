import React, { createContext, useState } from "react";

export const FileContext = createContext();

const FolderListContextProvider = (props) => {
  const [selectId, setSelectId] = useState(null);

  const [folders, setFolders] = useState([
    {
      title: "Root Folder 1",                              
      id: 1,
      children: [
        {
          title: "Sub Folder 1.1",
          id: 11,
          children: [
            {
              title: "Sub Child 1.1.1",
              id: 111,
              children: []
            },
          ],
        },
        {
          title: "Sub Folder Child 1.1.2",
          id: 112,
          children: [],
        },
      ],
    },
    {
      title: "Root Folder 2",
      id: 2,
      children: [
        {
          title: "Sub Folder 2.1",
          id: 22,
          children: [],
        },
      ],
    },
  ]);


  const randId = () => {                                   //generate random Id
    return Math.floor(1000 + Math.random() * 9000);
  };

  const folderGenerator = (list, id, obj) => {             // File Render
    const locateFile = list.find((e) => {
      if (e.id === id) {
        return e;
      }
      if (e.children.length > 0) {
        folderGenerator(e.children, id, obj);
      }

      return undefined;
    });

    if (locateFile) {
        locateFile.children.push(obj);

      setFolders([...folders]);
    }
  };

  //Adding a folder to the array
  const addFolder = (title) => {                     
    if (!selectId) {
      folders.push({
        title,
        id: randId(),
        children: [],
      });
      setFolders([...folders]);
    } else {
      folderGenerator(folders, selectId, { title, id: randId(), children: [] });
    }
  };

  const folderSelect = (id) => {                    // Selected file
    setSelectId(id);
  };

  const folderUnselect = () => {                        // De-Selected File
    setSelectId(null);
  };

  return (
    <FileContext.Provider
      value={{
        folders,
        selectId,
        addFolder,
        folderSelect,
        folderUnselect, 
      }}>
      {props.children}
    </FileContext.Provider>
  );
};

export default FolderListContextProvider;