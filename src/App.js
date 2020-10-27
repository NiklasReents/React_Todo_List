import React from "react";
import { useState } from "react";
import User from "./user";
import Todo from "./list";
import "./styles.css";

export default function App() {
  const [count, setCount] = useState(0);

  function createTodoElement(){ 
    setCount(count + 1);
  }
  
  return (
    <div className="App">
      <span><User/></span>
      <span>{Array(count).fill(<Todo/>)}</span>
      <span><button onClick={createTodoElement}>+</button></span>
    </div>
  );
}
