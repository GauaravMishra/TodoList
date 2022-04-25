import React from "react";
import './App.css';
import Form from "./Components/Form";
import Header from "./Components/Header";

function App() {
  
  return (
    <div className="container">
      <div className="app-wrapper">
        <div>
      <Header/>
      </div>
      <div>
        <Form/>
       
      </div>
      </div>
    </div>
  );
}

export default App;
