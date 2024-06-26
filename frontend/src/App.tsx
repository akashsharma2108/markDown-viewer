import React from "react";
import MarkdownEditor from "./components/markDown/MarkDownEditior";
import "highlight.js/styles/atom-one-dark.min.css";
import "./App.scss";

const App: React.FC = () => {
  return (
    <div className="App">
      <MarkdownEditor />
    </div>
  );
};

export default App;
