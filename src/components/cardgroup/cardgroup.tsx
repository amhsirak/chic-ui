import React, { ReactNode } from 'react';
import { StyledCards } from './styled';

export interface StyledCardGroupProps {
  children?: ReactNode;
  style?: React.CSSProperties;
  className?: string;
}

export const CardGroup: React.ForwardRefRenderFunction<
  HTMLDivElement,
  StyledCardGroupProps
> = (props, ref) => {
  const { children, style, className } = props;

  return (
    <StyledCards
      style={style}
      className={className}
      ref={ref as React.MutableRefObject<HTMLDivElement>}
    >
      {children}
    </StyledCards>
  );
};

export default React.forwardRef<HTMLDivElement, StyledCardGroupProps>(
  CardGroup
);
