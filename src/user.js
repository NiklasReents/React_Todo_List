import React from "react";
import { useState } from "react";
import "./styles.css";

export default function User({ username }) {
  const [user, setUser] = useState("");
  const [displayUser, setDisplayUser] = useState(username);

  function getUser(event) {
    setUser(event.target.value);
  }

  function showUser() {
    if (document.getElementById("form-input").value === "") {
      alert("Fill in the form!");
      setDisplayUser("");
    } else {
      setDisplayUser(`Hey ${user}, this is your todo-list!`);
    }
  }

  return (
    <div>
      <input
        id="form-input"
        onChange={getUser}
        className="input"
        placeholder="Type in your username..."
      />
      <button onClick={showUser}>submit</button>
      <h4 id="caption">{displayUser}</h4>
      <hr/>
    </div>
  );
}
