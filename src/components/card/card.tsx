import React, { ReactNode, ElementType, HTMLAttributes } from 'react';
import { StyledCard } from './styled';

export interface StyledCardProps
  extends Omit<HTMLAttributes<HTMLAnchorElement>, 'as' | 'disabled'> {
  className?: string;
  children: ReactNode;
  as?: ElementType;
  href?: string;
}

const Card: React.ForwardRefRenderFunction<HTMLAnchorElement, StyledCardProps> = (
  props,
  ref
) => {
  const { className, children, href } = props;

  return (
    <StyledCard
      ref={ref}
      className={className}
      href={href}
    >
      {children}
    </StyledCard>
  );
};

export default React.forwardRef<HTMLAnchorElement, StyledCardProps>(Card);
