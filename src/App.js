import React from "react";
import User from "./user";
import Todo from "./list";
import "./styles.css";

export default function App() {
  return (
    <div className="App">
      <User username="" />
      <Todo key={0} name="Shopping" />
      <Todo key={1} name="Exercising" />
      <Todo key={2} name="Yoga" />
      <Todo key={3} name="Climbing" />
    </div>
  );
}
