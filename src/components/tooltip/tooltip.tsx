import React, { ReactNode } from 'react';
import { StyledTooltip } from './styled';
export type position = 'top' | 'bottom' | 'left' | 'right';

export interface TooltipProps {
  bg: string;
  position: position;
  className?: string;
  children?: ReactNode;
}

const Tooltip: React.ForwardRefRenderFunction<HTMLSpanElement, TooltipProps> = (
  props,
  ref
) => {
  const { children } = props;
  return (
    <StyledTooltip 
    {...props} 
    ref={ref as React.MutableRefObject<HTMLSpanElement>}
    >
      {children}
    </StyledTooltip>
  );
};

export default React.forwardRef<HTMLSpanElement, TooltipProps>(Tooltip);
