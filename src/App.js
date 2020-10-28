import React from "react";
import { useState } from "react";
import User from "./user";
import Todo from "./list";
import "./styles.css";

export default function App() {
  const [count, setCount] = useState(1);
  const [element, setElement] = useState([]);

  function createTodoElement() { 
    setCount(count + 1);
    setElement(Array(count).fill(<Todo/>));
  }
  
  return (
    <div className="App">
      <div><User/></div>
      <div>{element}</div>
      <div><button onClick={createTodoElement}>+</button></div>
    </div>
  );
}
