import React from "react";
import { useState } from "react";

export default function Todo({ name, key }) {
  const createDate = new Date().toLocaleDateString();
  const [value, setValue] = useState("");
  const [todoValue, setTodoValue] = useState(name);
  const [date, setDate] = useState(createDate);

  function handleChange(event) {
    setValue(event.target.value);
  }

  function handleEdit() {
    setTodoValue(value);
    setValue("");
    setDate(createDate);
    if (value === "") {
      setDate("");
    }
  }

  function markAsDone() {
    const clickEvent = document.getElementById("Todo" + key);
    clickEvent.classList.toggle("crossed-line");
  }

  function markAsDeleted() {
    setTodoValue("");
    setDate("");
  }

  return (
    <div className="outer-div">
      <div className="todo-item" id={"Todo" + key}>
        <input onClick={markAsDone} type="checkbox"/>
        <h4>
          {todoValue} {date}
        </h4>
        <button onClick={handleEdit}> Edit </button>
        <button onClick={markAsDeleted}> Delete </button>
      </div>
      <input
        className="input"
        onChange={handleChange}
        value={value}
        placeholder="Edit"
      />
    </div>
  );
}
