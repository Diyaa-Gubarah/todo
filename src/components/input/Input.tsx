import { COLOR, FONT_SIZE, SPACING } from "../../constants";

import React from "react";
import styled from "styled-components";

interface InputProps {
  placeholder?: string;
  value?: string;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  className?: string;
  maxLength?: string;
  padding?: keyof typeof SPACING;
  fontSize?: keyof typeof FONT_SIZE;
  borderRadius?: keyof typeof SPACING;
  borderColor?: keyof typeof COLOR;
}

const StyledInput = styled.input<InputProps>`
  padding: ${(props) => (props.padding ? SPACING[props.padding] : SPACING.sm)};
  border: ${(props) =>
    props.borderColor
      ? `1px solid ${props.borderColor || COLOR.text}`
      : `1px solid ${COLOR.text}`};
  border-radius: ${(props) =>
    props.borderRadius ? SPACING[props.borderRadius] : SPACING.xsm};
  font-size: ${(props) =>
    props.fontSize ? FONT_SIZE[props.fontSize] : FONT_SIZE.md};
  font-weight: 400;
  display: flex;
  flex: 1;
  width: 100%;
`;

const Input: React.FC<InputProps> = ({
  placeholder,
  value,
  onChange,
  className,
  padding,
  fontSize,
  borderRadius,
  maxLength,
}) => {
  return (
    <StyledInput
      type="text"
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      className={className}
      padding={padding}
      fontSize={fontSize}
      borderRadius={borderRadius}
      maxLength={maxLength}
    />
  );
};

export default React.memo(Input);
