import React from 'react';
import { themeType } from 'config/themes';
import { StyledDivider } from './styled';

export interface DividerProps {
  type?: themeType;
  className?: string;
  dashed?: boolean;
}

const Divider: React.ForwardRefRenderFunction<HTMLHRElement, DividerProps> = (
  props
) => {
  const { type = 'secondary', className, dashed } = props;

  return <StyledDivider className={className} type={type} dashed={dashed} />;
};

export default React.forwardRef<HTMLHRElement, DividerProps>(Divider);
