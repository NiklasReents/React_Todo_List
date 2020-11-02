import React from "react";
import { useState } from "react";

export default function Todo({ name, index, deleteElement }) {
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
    const clickEvent = document.getElementById("Todo" + index);
    clickEvent.classList.toggle("crossed-line");
  }

  return (
    <div className="outer-div todo-item">
      <div id={"Todo" + index}>
        <input onClick={markAsDone} type="checkbox" />
        <span>
          {todoValue} {date}
        </span>
      </div>
      <div>
        <input
          className="input"
          onChange={handleChange}
          value={value}
          placeholder="Edit"
        />
        <button onClick={handleEdit}>Edit</button>
        <button onClick={() => deleteElement(index)}>Delete</button>
      </div>
    </div>
  );
}
