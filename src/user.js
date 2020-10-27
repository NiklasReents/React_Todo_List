import React from "react";
import { useState } from "react";

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
    <div className="outer-div">
      <input
        id="form-input"
        onChange={getUser}
        className="input"
        placeholder="Type in your username..."
      />
      <button onClick={showUser}>Submit</button>
      <h4 id="caption">{displayUser}</h4>
    </div>
  );
}
