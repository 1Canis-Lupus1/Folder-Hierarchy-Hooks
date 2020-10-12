import React, { useState, useContext } from 'react'
import { FolderListContext } from '../contexts/FolderListContext'

const FolderForm = () => {
  const { folders, addFolder } = useContext(FolderListContext)
  const [title, setTitle] = useState('');

  //when Add Folder is clicked
  const handleSubmit = e => {
    e.preventDefault();
    addFolder(title);
    // console.log("Title",title);
    // console.log(folders)
    setTitle('');
    // const folderIndex = e.target.getAttribute("folder-index");
    // console.log("FolderIndex",folderIndex)
  }

  const handleChange = e => {
    setTitle(e.target.value)
  }

  //For individual list click
  const handleClick = (e) => {
    const index = e.target.getAttribute("data-index");
    const folderIndex = e.target.getAttribute("folder-index");
    console.log("Folder Index",folderIndex)
    // console.log(typeof(folders))
    let dummyFolders=[...folders]
    let parent=dummyFolders.forEach(item=>{
      //Checking the item which matches the selected list
      if (item.id === folderIndex) {
        console.log("Dummy:",dummyFolders)
        console.log("Title id:",title); //this is not returning any value
        item.children.push(title)//I Want to fetch the next title value here
        console.log("Dummy",item.children)
      }

    })
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