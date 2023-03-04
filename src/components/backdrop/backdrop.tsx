import React, { MouseEventHandler } from 'react';
import { StyledBackdrop } from './styled';

export interface BackdropProps {
  visible?: boolean;
  color?: string;
  relative?: boolean;
  onClick?: MouseEventHandler<HTMLDivElement>;
  zIndex?: number;
  style?: React.CSSProperties;
  className?: string;
}

export const Backdrop: React.ForwardRefRenderFunction<
  HTMLDivElement,
  BackdropProps
> = (props, ref) => {
  const { visible = true, color, zIndex, relative, style, className } = props;
  return (
    <StyledBackdrop
      visible={visible}
      color={color}
      zIndex={zIndex}
      relative={relative}
      style={style}
      className={className}
    />
  );
};

export default React.forwardRef<HTMLDivElement, BackdropProps>(Backdrop);
