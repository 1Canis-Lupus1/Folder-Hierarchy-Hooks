import React from "react";
import FolderListContextProvider from "../contexts/FolderListContext";
import FolderForm from "./FolderForm";

import "../App.css";

const App = () => {
  return (
    <FolderListContextProvider>
      <div className="container">
        <div className="app-wrapper">
          <div className="main">
            <FolderForm />
          </div>
        </div>
      </div>
    </FolderListContextProvider>
  );
};

export default App;
