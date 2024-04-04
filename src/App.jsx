import React from "react";
import ReactDOM from "react-dom";
import Navbar from "navbar/Navbar";
import Counter from "counter/Counter";

const App = () => (
  <>
    <Navbar />
    <div className="App-container">
      <Counter />
    </div>
  </>
);
ReactDOM.createRoot(document.getElementById("app")).render(<App />);
