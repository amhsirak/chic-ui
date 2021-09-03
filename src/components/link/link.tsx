import React, { ReactNode, ElementType, HTMLAttributes } from 'react';
import { StyledLink } from './styled';

export interface LinkProps extends Omit<HTMLAttributes<HTMLAnchorElement>, 'as' | 'disabled'> {
  disabled?: boolean;
  className?: string;
  children: ReactNode;
  as?: ElementType;
  href?: string;
}

const Link: React.ForwardRefRenderFunction<HTMLAnchorElement, LinkProps> = (
  props,
  ref
) => {
  const { disabled = false, className, children, as = 'a', href } = props;

  return (
    <StyledLink
      ref={ref}
      disabled={disabled}
      className={className}
      as={disabled ? 'p' : as}
      href={href}
    >
      {children}
    </StyledLink>
  );
};

export default React.forwardRef<HTMLAnchorElement, LinkProps>(Link);