import { Button, Input, Text } from "../../../components";
import React, { useState } from "react";

import ErrorText from "./ErrorText";
import styled from "styled-components";
import { useTodos } from "../../../hooks";

type Props = { children?: React.ReactNode };

const FormWrapper = styled.form`
  gap: var(--padding-sm);
  display: flex;
  flex: 1;
  position: sticky;
  top: 0;
  padding: var(--padding-sm) 0;
  background: white;

  @media screen and (max-width: 570px) {
    flex-direction: column;
  }
`;

const TodoForm: React.FC<Props> = ({ children }) => {
  const { addTodo } = useTodos();
  const [task, setTask] = useState("");

  const handleSubmit = React.useCallback(
    (e: React.FormEvent) => {
      e.preventDefault();
      addTodo(task);
      setTask("");
    },
    [task]
  );

  return (
    <>
      <FormWrapper onSubmit={handleSubmit}>
        <Input
          value={task}
          onChange={(e) => setTask(e.target.value)}
          placeholder="Enter a task..."
          maxLength="50"
        />

        {children}
        <Button type="submit">
          <Text fontSize="md" color="background">
            Add task
          </Text>
        </Button>
      </FormWrapper>
      <ErrorText />
    </>
  );
};

export default React.memo(TodoForm);
