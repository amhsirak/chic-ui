import React from 'react';
import { StyledAvatar, StyledImage, StyledSpan } from './styled';

export interface AvatarProps {
  src?: string;
  className?: string;
  name?: string;
  isActive?: boolean;
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
    ...rest
  } = props;
  return (
    <StyledAvatar src={src} ref={ref} isActive={isActive} {...rest}>
      {src ? (
        <StyledImage alt={name} src={src} {...rest} />
      ) : (
        <StyledSpan {...rest}>{name}</StyledSpan>
      )}
    </StyledAvatar>
  );
};

export default React.forwardRef<HTMLSpanElement, AvatarProps>(Avatar);
