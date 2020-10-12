import React, { useState, useContext } from 'react'
import { FolderListContext } from '../contexts/FolderListContext'

const FolderForm = () => {
  const { folders, addFolder } = useContext(FolderListContext)
  const [title, setTitle] = useState('');

  const handleSubmit = e => {
    e.preventDefault();
    addFolder(title);
    // console.log(title);
    setTitle('');
  }

  const handleChange = e => {
    setTitle(e.target.value)
  }

  const handleClick = (e) => {
    // console.log("Folder ID",e.target.getAttribute("folder-index"))
    const index = e.target.getAttribute("data-index");
    const folderIndex = e.target.getAttribute("folder-index");
    // console.log(typeof(folders))
    let dummyFolders=[...folders]
    let parent=dummyFolders.forEach(item=>{
      //Checking the item which matches the selected list
      if (item.id === folderIndex) {
        console.log("Matched");
        console.log(item.title);
        item.children.push("Sample")
        console.log("Dummy",item.children)
      }

    })

    // console.log("Clicked Folder ID:",e.target);
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
      <div>
        {folders.length ? (
          <ul className="list">
            {folders.map((folders, index) => {
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
    </form>
  )
}

export default FolderForm