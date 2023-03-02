import React, { ReactNode } from 'react';
import { StyledCards } from './styled';

export interface StyledCardGroupProps {
  children?: ReactNode;
  style?: React.CSSProperties;
}

export const CardGroup: React.ForwardRefRenderFunction<
  HTMLDivElement,
  StyledCardGroupProps
> = (props, ref) => {
  const { children, style } = props;

  return (
    <StyledCards style={style} ref={ref as React.MutableRefObject<HTMLDivElement>}>
      {children}
    </StyledCards>
  );
};

export default React.forwardRef<HTMLDivElement, StyledCardGroupProps>(
  CardGroup
);
