import * as React from "react";

import { FONT_SIZE, SPACING } from "../../constants";

import styled from "styled-components";

interface BoxProps {
  children: React.ReactNode;
  className?: string;
  // Styling Props
  backgroundColor?: string;
  fontSize?: keyof typeof FONT_SIZE;
  gap?: keyof typeof SPACING;
  rounded?: keyof typeof SPACING;
  flex?: number;
  // Layout Props
  direction?: "row" | "row-reverse" | "column" | "column-reverse";
  justify?:
    | "flex-start"
    | "flex-end"
    | "center"
    | "space-between"
    | "space-around";
  align?: "flex-start" | "flex-end" | "center" | "baseline" | "stretch";
  self?: "auto" | "flex-start" | "flex-end" | "center" | "baseline" | "stretch";
  wrap?: "nowrap" | "wrap" | "wrap-reverse";
  // Spacing Props
  padding?: keyof typeof SPACING;
  margin?: keyof typeof SPACING;
}

const Container = styled.div<BoxProps>`
  display: flex;
  flex-direction: ${(props) => props.direction || "row"};
  justify-content: ${(props) => props.justify || "flex-start"};
  align-items: ${(props) => props.align || "stretch"};
  align-self: ${(props) => props.self || "auto"};
  flex-wrap: ${(props) => props.wrap || "nowrap"};
  background: ${(props) => props.backgroundColor || "transparent"};
  font-size: ${(props) => props.fontSize || "inherit"};
  gap: ${(props) => SPACING[props.gap || "xsm"]};
  padding: ${(props) => SPACING[props.padding || "xsm"]};
  margin: ${(props) => SPACING[props.margin || "xsm"]};
  flex: ${(props) => props.flex || "1"};
`;

const Box: React.FC<BoxProps> = ({ children, className, ...rest }) => {
  return (
    <Container className={className} {...rest}>
      {children}
    </Container>
  );
};

export default React.memo(Box);
