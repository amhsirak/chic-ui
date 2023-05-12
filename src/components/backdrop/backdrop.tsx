import React, { MouseEventHandler } from 'react';
import { StyledBackdrop } from './styled';

export interface BackdropProps {
  visible?: boolean;
  color?: string;
  onClick?: MouseEventHandler<HTMLDivElement>;
  style?: React.CSSProperties;
  className?: string;
  children?: React.ReactNode;
}

export const Backdrop: React.ForwardRefRenderFunction<
  HTMLDivElement,
  BackdropProps
> = (props, ref) => {
  const { visible = true, color, style, className, children, onClick } = props;

  const refObject = ref || React.createRef<HTMLDivElement>();
  const newRefObject = Object.assign({}, refObject);

  return (
    <StyledBackdrop
      visible={visible}
      color={color}
      style={style}
      className={className}
      onClick={onClick}
      ref={newRefObject}
    >
      {children}
    </StyledBackdrop>
  );
};

export default React.forwardRef<HTMLDivElement, BackdropProps>(Backdrop);
