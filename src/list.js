import React from "react";
import { useState } from "react";

export default function Todo({ name, index = Number(), deleteElement }) {
  const createDate = new Date().toLocaleDateString();
  const [value, setValue] = useState("");
  const [todoValue, setTodoValue] = useState(name);
  const [date, setDate] = useState();

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
    const element = document.getElementsByClassName("todo-value");
    for (let i = 0; i < element.length; i++) {
      if (document.getElementsByClassName("checkbox")[i].checked === true) {
        element[i].classList.toggle("crossed-line", true);
        element[i].style.color = "red";
      } else {
        element[i].classList.toggle("crossed-line", false);
        element[i].style.color = "black";
      }
    }
  }

  return (
    <div className="outer-div todo-item">
      <div>
        <input
          onClick={markAsDone}
          className="checkbox"
          type="checkbox"
          value="checked"
        />
        <span className="todo-value">
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
