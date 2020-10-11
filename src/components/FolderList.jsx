import React, { useContext } from "react";
import { FolderListContext } from "../contexts/FolderListContext";
import Folder from "./Folder";

const FolderList = () => {
  const { folders } = useContext(FolderListContext);

  return (
    <div>
      {folders.length ? (
        <ul className="list">
          {folders.map(folders => {
            return <Folder folders={folders} key={folders.id} />;
          })}
        </ul>
      ) : (
        <div className="no-tasks">Contains No Folder</div>
      )}
    </div>
  );
};

export default FolderList;