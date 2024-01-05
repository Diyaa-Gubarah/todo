import { List } from "../../../components";
import React from "react";
import { Todo } from "../../../types";
import { TodoItem } from ".";
import { useTodos } from "../../../hooks";

const TodoList: React.FC = () => {
  const { filteredTodos } = useTodos();

  const renderTodoItem = React.useCallback(
    (todo: Todo) => <TodoItem todo={todo} key={todo.id} />,
    []
  );

  return (
    <List
      data={filteredTodos}
      renderItem={renderTodoItem}
      direction="column"
      gap="md"
    />
  );
};

export default React.memo(TodoList);
