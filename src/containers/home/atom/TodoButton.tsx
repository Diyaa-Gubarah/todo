import { COLOR, SPACING } from "../../../constants";

import styled from "styled-components";

interface StyledDeleteButtonProps {
  color?: keyof typeof COLOR;
  backgroundColor?: keyof typeof COLOR;
}

const TodoButton = styled.button<StyledDeleteButtonProps>`
  background-color: transparent;
  cursor: pointer;
  padding: ${SPACING.xsm};
  color: ${(props) => (props?.color ? COLOR[props.color] : "accent")};

  ${(props) =>
    !props.backgroundColor &&
    `border: 1px solid var(--text);
     border-radius: var(--padding-xsm);`}

  &:hover {
    background-color: var(--background);
  }

  @media screen and (max-width: 570px) {
    width: 100%;
  }
`;

export default TodoButton;
