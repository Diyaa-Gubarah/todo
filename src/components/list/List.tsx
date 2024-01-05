import * as React from "react";

import { SPACING } from "../../constants";
import styled from "styled-components";

interface ListProps<T> {
  data?: T[];
  renderItem?: (item: T) => JSX.Element;
  direction?: "row" | "row-reverse" | "column" | "column-reverse";
  gap?: keyof typeof SPACING;
}

const ListWrapper = styled.div<ListProps<any>>`
  display: flex;
  align-items: center;
  overflow-x: scroll;
  scroll-snap-align: start;
  scroll-snap-type: x mandatory;
  width: auto;
  flex-direction: ${(props) => props.direction};
  gap: ${(props) => SPACING[props?.gap || "sm"]};
  /* hide scrollbar */
  ::-webkit-scrollbar {
    width: 0;
    height: 0;
  }
`;

const List: React.FC<ListProps<any>> = ({ data, renderItem, ...props }) => {
  return (
    <ListWrapper {...props}>
      {React.Children.toArray(data?.map((item) => renderItem?.(item)))}
    </ListWrapper>
  );
};

export default React.memo(List);
