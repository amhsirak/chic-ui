import React from 'react';
import { StyledTooltip } from './styled';
export type position = 'top' | 'bottom' | 'left' | 'right';

export interface TooltipProps {
  bg: string;
  label: string;
  position: position;
  arrowColor: string;
}

const Tooltip: React.ForwardRefRenderFunction<HTMLSpanElement, TooltipProps> = (
  props,
  ref
) => {
  const { children } = props;
  return (
    <StyledTooltip {...props} ref={ref}>
      {children}
    </StyledTooltip>
  );
};

export default React.forwardRef<HTMLSpanElement, TooltipProps>(Tooltip);
