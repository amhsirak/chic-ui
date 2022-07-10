import React from 'react';
import { StyledAvatar, StyledImage, StyledSpan } from './styled';

export interface AvatarProps {
  src?: string;
  className?: string;
  name?: string;
  isActive?: boolean;
  width?: number;
  height?: number;
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
