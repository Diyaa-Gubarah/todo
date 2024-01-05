import { COLOR, FONT_SIZE } from "../../constants";

import React from "react";
import styled from "styled-components";

type TextAlign = "left" | "right" | "center" | "justify";

interface TextProps {
  color?: keyof typeof COLOR;
  fontSize: keyof typeof FONT_SIZE; // Define the type of fontSize
  textAlign?: TextAlign | string;
  fontWeight?: string;
  gradient?: string;
  fontType?: "header" | "body";
  children: React.ReactNode;
  className?: string;
}

const StyledText = styled.span<TextProps>`
  color: ${(props) => COLOR[props.color || "text"]};
  text-align: ${(props) => props.textAlign};
  font-size: ${(props) => FONT_SIZE[props.fontSize]};
  font-weight: ${(props) => props.fontWeight};
  font-family: ${(props) => (props.fontType === "body" ? "Roboto" : "Poppins")};
`;

const Text: React.FC<TextProps> = ({ children, className, ...props }) => {
  return (
    <StyledText className={className} {...props}>
      {children}
    </StyledText>
  );
};

export default React.memo(Text);
