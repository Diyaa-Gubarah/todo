import React from "react";
import { TodoButton } from ".";
import styled from "styled-components";
import { useTodos } from "../../../hooks";

type Props = {};

const FilterWrapper = styled.div`
  display: flex;
  gap: var(--padding-sm);
  padding: var(--padding-sm) 0;
  flex-wrap: wrap;
`;

const TodoFilter: React.FC<Props> = () => {
  const { filterTodos } = useTodos();

  return (
    <FilterWrapper>
      <TodoButton onClick={() => filterTodos("all")}>All</TodoButton>
      <TodoButton onClick={() => filterTodos(true)}>Completed</TodoButton>
      <TodoButton onClick={() => filterTodos(false)}>Incomplete</TodoButton>
    </FilterWrapper>
  );
};

export default React.memo(TodoFilter);
