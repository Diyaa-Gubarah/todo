import { Box, Input, Text } from "../../../components";
import { COLOR, SPACING } from "../../../constants";
import React, { useState } from "react";

import { Todo } from "../../../types";
import { TodoButton } from ".";
import styled from "styled-components";
import { useTodos } from "../../../hooks";

interface StyledTodoTextProps {
  completed: boolean;
}

const StyledTodoText = styled(Text)<StyledTodoTextProps>`
  margin: 0 var(--padding-sm);
  text-decoration: ${(props) => (props.completed ? "line-through" : "none")};
  font-weight: ${(props) => (props.completed ? "bold" : "normal")};
`;

const StyledLi = styled.li`
  list-style: none;
  padding: ${SPACING.sm};
  border-radius: ${SPACING.xsm};
  border: 1px solid ${COLOR.text};
  list-style: none;
  width: 100%;
`;

const ButtonContainer = styled(Box)`
  @media screen and (max-width: 570px) {
    flex-direction: column;
  }
`;

const TodoItem: React.FC<{ todo: Todo }> = ({ todo }) => {
  const [task, setTask] = useState("");
  const [show, setShow] = useState(false);
  const { toggleTodo, deleteTodo, editTodo } = useTodos();

  return (
    <StyledLi key={todo.id}>
      <input
        type="checkbox"
        checked={todo.completed}
        onChange={() => toggleTodo(todo.id)}
      />
      <StyledTodoText completed={todo.completed} fontSize="md">
        {todo.text}
      </StyledTodoText>
      <Box gap="sm">
        {show ? (
          <ButtonContainer>
            <Input
              value={task || todo.text}
              onChange={(e) => setTask(e.target.value)}
              placeholder="Update a task..."
              maxLength="50"
            />
            <TodoButton
              onClick={() => {
                setShow((show) => !show);
                editTodo(todo.id, task || todo.text);
              }}
            >
              UPDATE
            </TodoButton>
            <TodoButton onClick={() => setShow((show) => !show)} color="accent">
              CANCEL
            </TodoButton>
          </ButtonContainer>
        ) : (
          <ButtonContainer gap="xsm">
            <TodoButton onClick={() => setShow((show) => !show)}>
              EDIT
            </TodoButton>
            <TodoButton onClick={() => deleteTodo(todo.id)} color="accent">
              DELETE
            </TodoButton>
          </ButtonContainer>
        )}
      </Box>
    </StyledLi>
  );
};

export default React.memo(TodoItem);
