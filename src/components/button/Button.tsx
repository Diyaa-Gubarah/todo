import { COLOR, FONT_SIZE, SPACING } from "../../constants";

import React from "react";
import styled from "styled-components";

interface ButtonProps {
  padding?: keyof typeof SPACING;
  borderRadius?: keyof typeof SPACING;
  fontSize?: keyof typeof FONT_SIZE;
  backgroundColor?: keyof typeof COLOR;
  color?: keyof typeof COLOR;
}

const Button = styled.button<ButtonProps>`
  background-color: ${(props) =>
    props.backgroundColor ? COLOR[props.backgroundColor] : COLOR.primary};
  color: ${(props) => (props.color ? COLOR[props.color] : "white")};
  padding: ${(props) => (props.padding ? SPACING[props.padding] : SPACING.sm)};
  font-size: ${(props) =>
    props.fontSize ? FONT_SIZE[props.fontSize] : FONT_SIZE.md};
  border-radius: ${(props) =>
    props.borderRadius ? SPACING[props.borderRadius] : SPACING.xsm};
  width: auto;
  cursor: pointer;
  border: none;
  text-align: center;
  text-decoration: none;
  display: inline-block;
`;

export default React.memo(Button);
