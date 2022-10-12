import React, { MouseEventHandler } from 'react';
import { StyledBackdrop } from './styled';

export interface BackdropProps {
  visible?: boolean;
  color?: string;
  relative?: boolean;
  zIndex?: number;
  onClick?: MouseEventHandler<HTMLDivElement>;
}

export const Backdrop: React.ForwardRefRenderFunction<
  HTMLDivElement,
  BackdropProps
> = (props, ref) => {
  const { visible=true, color, zIndex, relative } = props;
  console.log(props)
  return <StyledBackdrop visible={visible} color={color} zIndex={zIndex} relative={relative}  />;
};

export default React.forwardRef<HTMLDivElement, BackdropProps>(Backdrop);
