import React from 'react';
import { StyledAvatar, StyledImage, StyledSpan } from './styled';

export interface AvatarProps {
  src?: string;
  className?: string;
  name?: string;
  isActive?: boolean;
  width?: number;
  height?: number;
  style?: React.CSSProperties;
}

export const Avatar: React.ForwardRefRenderFunction<
  HTMLSpanElement,
  AvatarProps
> = (props, ref) => {
  const {
    src,
    className,
    name,
    isActive = false,
    height = 80,
    width = 80,
    style,
    ...rest
  } = props;
  return (
    <StyledAvatar
      height={height}
      width={width}
      src={src}
      ref={ref}
      isActive={isActive}
      className={className}
      name={name}
      style={style}
    >
      {src ? (
        <StyledImage alt={name} src={src} {...rest} />
      ) : (
        <StyledSpan {...rest}>{name}</StyledSpan>
      )}
    </StyledAvatar>
  );
};

export default React.forwardRef<HTMLSpanElement, AvatarProps>(Avatar);
