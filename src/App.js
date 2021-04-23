import React from "react";
import ReactDom from "react-dom";
import MainContainer from "./MainContainer.js";
import Nav from "./Nav.js";

const App = () => {
  return (
    <div>
      <Nav />,
      <MainContainer />
    </div>
  );
};

ReactDom.render(<App />, document.getElementById("root"));
