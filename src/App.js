import React from "react";
import { useState } from "react";
import User from "./user";
import Todo from "./list";
import "./styles.css";

export default function App() {
  const [count, setCount] = useState(0);
  const [element, setElement] = useState([]);

  function createTodoElement() {
    setCount(count + 1);
    setElement(
      Array(count + 1).fill(
        <Todo name="" index deleteElement={deleteTodoElement} />
      )
    );
  }

  const deleteTodoElement = (index) => {
    /*this function will make it possible to
    dynamically delete todo elements*/
  };

  return (
    <div className="App">
      <div>
        <User />
      </div>
      <div>{element}</div>
      <div>
        <button onClick={createTodoElement}>Add Todo</button>
      </div>
    </div>
  );
}
