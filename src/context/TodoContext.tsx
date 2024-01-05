import React, { createContext, useContext, useState } from "react";

import { Todo } from "../types";

export interface TodoContextValue {
  todos: Todo[];
  filteredTodos: Todo[];
  addTodo: (text: string) => void;
  editTodo: (id: number, newText: string) => void;
  deleteTodo: (id: number) => void;
  toggleTodo: (id: number) => void;
  filterTodos: (completed: boolean | string) => void;
  error: string | null;
  setError: React.Dispatch<React.SetStateAction<string | null>>;
}

const TodoContext = createContext<TodoContextValue | undefined>(undefined);

export const useTodoContext = () => {
  const context = useContext(TodoContext);
  if (!context) {
    throw new Error("useTodoContext must be used within a TodoProvider");
  }
  return context;
};

type TodoProviderProps = {
  children: React.ReactNode;
};

const TodoProvider: React.FC<TodoProviderProps> = ({ children }) => {
  const [todos, setTodos] = useState<Todo[]>([]);
  const [filteredTodos, setFilteredTodos] = useState<Todo[]>([]);
  const [error, setError] = useState<null | string>(null);

  const addTodo = (text: string) => {
    setError(null);
    if (text.length) {
      const newTodo = { id: Date.now(), text: text.trim(), completed: false };
      setTodos((prevTodos) => [...prevTodos, newTodo]);

      setFilteredTodos((prevFilteredTodos) => [...prevFilteredTodos, newTodo]);
    } else {
      setError("Please make sure you enter todo details!");
    }
  };

  const editTodo = (id: number, newText: string) => {
    setTodos((prevTodos) =>
      prevTodos.map((todo) =>
        todo.id === id ? { ...todo, text: newText } : todo
      )
    );

    setFilteredTodos((prevFilteredTodos) =>
      prevFilteredTodos.map((todo) =>
        todo.id === id ? { ...todo, text: newText } : todo
      )
    );
  };

  const toggleTodo = (id: number) => {
    setTodos((prevTodos) =>
      prevTodos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );

    setFilteredTodos((prevFilteredTodos) =>
      prevFilteredTodos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  const deleteTodo = (id: number) => {
    setTodos((prevTodos) => prevTodos.filter((todo) => todo.id !== id));

    setFilteredTodos((prevFilteredTodos) =>
      prevFilteredTodos.filter((todo) => todo.id !== id)
    );
  };

  const filterTodos = (completed: boolean | string) => {
    if (completed === "all") {
      // If the completed argument is a string, return all todos
      setFilteredTodos((pre) => (pre = [...todos]));
    } else {
      // Otherwise, filter based on the completed argument
      setFilteredTodos(
        (pre) =>
          (pre = todos.filter((todo) => {
            return todo.completed === completed;
          }))
      );
    }
  };

  const value: TodoContextValue = {
    todos,
    filteredTodos,
    addTodo,
    editTodo,
    deleteTodo,
    toggleTodo,
    filterTodos,
    error,
    setError,
  };

  return <TodoContext.Provider value={value}>{children}</TodoContext.Provider>;
};

export default TodoProvider;
