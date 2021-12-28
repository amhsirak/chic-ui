import React from 'react';
import { themeType } from 'config/themes';
import { StyledDivider } from './styled';

export interface DividerProps {
  type?: themeType;
  className?: string;
  dashed?: boolean;
  thickness?: number;
}

const Divider: React.ForwardRefRenderFunction<HTMLHRElement, DividerProps> = (
  props
) => {
  const { type = 'secondary', className, dashed, thickness=0.5} = props;

  return <StyledDivider className={className} type={type} dashed={dashed} thickness={thickness} />;
};

export default React.forwardRef<HTMLHRElement, DividerProps>(Divider);
