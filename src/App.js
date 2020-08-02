import React from "react";
import "./styles.css";
import Todo from "./list";

export default function App() {
  return (
    <div className="App">
      <Todo key={0} name="Shopping" />
      <Todo key={1} name="Exercising" />
      <Todo key={2} name="Yoga" />
      <Todo key={3} name="Climbing" />
    </div>
  );
}
