import React from "react";
import FolderListContextProvider from "../contexts/FolderListContext";
import FolderList from "./FolderList";
import FolderForm from "./FolderForm";

import "../App.css";

const App = () => {
  return (
    <FolderListContextProvider>
      <div className="container">
        <div className="app-wrapper">
          <div className="main">
            <FolderForm />
            <FolderList />
          </div>
        </div>
      </div>
    </FolderListContextProvider>
  );
};

export default App;
