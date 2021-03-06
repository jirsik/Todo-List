import React from "react";
import { Todo } from "./types";

interface TodoListItemProps {
  todo: Todo;
}

export const TodoListItem: React.FunctionComponent<TodoListItemProps> = ({
  todo
}) => {
  return (
    <li>
      <label>
        <input type="checkbox" checked={todo.complete} />
        {todo.text}
      </label>
    </li>
  );
};
