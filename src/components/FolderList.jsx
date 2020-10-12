import React, { useContext } from "react";
import { FolderListContext } from "../contexts/FolderListContext";
// import Folder from "./Folder";

const FolderList = () => {
  const { folders } = useContext(FolderListContext);

  const handleClick=(e)=>{
    // console.log("Folder ID",e.target.getAttribute("folder-index"))
    const index=e.target.getAttribute("data-index");
    const folderIndex=e.target.getAttribute("folder-index");

    if(folders[index].id === folderIndex){
      console.log("Matched");
      console.log("Children: ",folders[index].children)
    }
    console.log("Clicked Folder ID:",folders[index].id);

    
  }

  return (
    <div>
      {folders.length ? (
        <ul className="list">
          {folders.map((folders,index) => {
            // console.log("Folder ID:",folders.id)
            // return <Folder folders={folders} key={index} />;
            return (
              <div>
                <li className="list-item" data-index={index} folder-index={folders.id} key={folders.id} onClick={handleClick}>
                  {folders.title}
                </li>
              </div>
            )
          })}
        </ul>
      ) : (
          <div className="no-tasks">Contains No Folder</div>
        )}
    </div>
  );
};

export default FolderList;