import React, { ReactNode } from 'react';
import { StyledCards } from './styled';

export interface StyledCardGroupProps {
    children?: ReactNode;
}

export const CardGroup: React.ForwardRefRenderFunction<
  HTMLDivElement, StyledCardGroupProps> = (props) => {
    const { children } = props;
    
  return (
      <StyledCards>
        {children}
      </StyledCards>
  );
};

export default React.forwardRef<HTMLDivElement, StyledCardGroupProps>(CardGroup);
