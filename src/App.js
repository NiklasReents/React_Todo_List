import React from "react";
import { useState } from "react";
import User from "./user";
import Todo from "./list";
import "./styles.css";

export default function App() {
  const [count, setCount] = useState(0);

  function createTodoElement() { 
    setCount(count + 1);
  }
  
  return (
    <div className="App">
      <div><User/></div>
      <div>{Array(count).fill(<Todo/>)}</div>
      <div><button onClick={createTodoElement}>+</button></div>
    </div>
  );
}
