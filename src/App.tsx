import React from "react";
import { TodoListItem } from "./TodoListItem";
import { Todo } from "./types";

const todos: Array<Todo> = [
  { text: "learn React", complete: false },
  { text: "learn TypeScript", complete: false }
];

const App: React.FC = () => {
  return (
    <div>
      <TodoListItem todo={todos[0]} />
    </div>
  );
};

export default App;
