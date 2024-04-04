import React from "react";
import ReactDOM from "react-dom";
import Navbar from "navbarComp/Navbar";
import Counter from "counterComp/Counter";

const App = () => (
  <>
    <Navbar />
    <div className="App-container">
      <Counter />
    </div>
  </>
);
ReactDOM.createRoot(document.getElementById("app")).render(<App />);
