import { TodoFilter, TodoForm, TodoList } from "./atom";

import React from "react";
import TodoProvider from "../../context/TodoContext";

const Todo: React.FC = () => {
  return (
    <TodoProvider>
      <TodoForm>
        <TodoFilter />
      </TodoForm>
      <TodoList />
    </TodoProvider>
  );
};

export default Todo;
