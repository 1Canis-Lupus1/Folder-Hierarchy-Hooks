import React from "react";
// import './App.css'
import FolderListContextProvider from "./contexts/FolderListContext";
import FolderForm from "./components/FolderForm";

function App() {
  return (
    <FolderListContextProvider>
      <div className="disp-box">
        <FolderForm />
      </div>
    </FolderListContextProvider>
  );
}

export default App;