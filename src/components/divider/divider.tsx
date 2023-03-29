import React from 'react';
import { themeType } from '../../tokens/themes';
import { StyledDivider } from './styled';

export interface DividerProps {
  type?: themeType;
  className?: string;
  dashed?: boolean;
  thickness?: number;
  style?: React.CSSProperties;
}

const Divider: React.ForwardRefRenderFunction<HTMLHRElement, DividerProps> = (
  props,
  ref
) => {
  const {
    type = 'secondary',
    className,
    dashed,
    thickness = 0.5,
    style
  } = props;

  return (
    <StyledDivider
      ref={ref}
      className={className}
      type={type}
      dashed={dashed}
      thickness={thickness}
      style={style}
    />
  );
};

export default React.forwardRef<HTMLHRElement, DividerProps>(Divider);
