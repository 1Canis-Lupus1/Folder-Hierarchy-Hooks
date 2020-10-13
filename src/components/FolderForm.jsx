import React, { Fragment, useState, useContext } from "react";
import { FileContext } from "../contexts/FolderListContext";

const FolderForm = () => {
    const { folders, addFolder, selectId, folderSelect, folderUnselect } = useContext(FileContext);
    const [title, setTitle] = useState("");

   const handleChange = (e) => {
        setTitle(e.target.value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (title.length >= 1) {
            addFolder(title);
        }
        setTitle("");
    };

    //Generating Child Nodes on Click event(**********Add Background color on click event*********)
    const folderGenerator = (folder) => {
        let folderHierarchy = folder.map((e) => {
            if (e.children.length > 0) {
                return (
                    <div key={e.id} style={{ margin: "4px 30px" }}>
                        <div
                            onClick={() => folderSelect(e.id)}>
                            &nbsp;{e.title}
                        </div>
                        <Fragment>{folderGenerator(e.children)}</Fragment>
                    </div>
                );
            } else {
                return (
                    <div key={e.id} style={{ margin: "5px 20px" }}>
                        <div
                            name={e.id}
                            onClick={() => folderSelect(e.id)}>
                            &nbsp;{e.title}
                        </div>
                    </div>
                );
            }
        });
        return folderHierarchy;
    };

    return (

        //Input Field with Add button rendering default folder list
        <React.Fragment>

            <div className='input-field' style={{ margin:"20px 30px"}}>
                <form onSubmit={handleSubmit}>
                    <input
                        type='text'
                        placeholder='Enter the Folder Name '
                        onChange={handleChange}
                        value={title}
                    />
                    <button className='btn-add' onClick={handleSubmit}>Add Folder
                    </button>
                </form>
            </div>
            <div className='folder-list'>
                {folderGenerator(folders)}
            </div>

        </React.Fragment>
    );
};

export default FolderForm;