import React from "react";
import "./styles.css";

import TodoItems from "./components/TodoItems";

export default function App() {
  return (
    <div className="TodoList">
      <TodoItems />
      <TodoItems />
      <TodoItems />
    </div>
  );
}
