import React from "react";
import "./App.css";
import Title from "./title";
import Unittype from "./unittype";
import Secoundunit from "./inputunit";
import FirstUnit from "./inputunit";

function App() {
  return (
    <body>
      <div className="box">
        <Title></Title>
        <Unittype></Unittype>
        <div>
          <Secoundunit></Secoundunit>
        </div>
        <div>
          <FirstUnit></FirstUnit>
        </div>
      </div>
    </body>
  );
}

export default App;
