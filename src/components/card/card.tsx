import React from 'react';
import { Image } from '../image';
import { StyledCard, StyledImage } from './styled';

export interface StyledCardProps {
  align?:string,
  href?: string;
  width?: string;
  height?: string;
  className?: string;
  src?: string;
}

export const Card: React.ForwardRefRenderFunction<
  HTMLDivElement,
  StyledCardProps
> = (props, ref) => {
  const { 
    className, 
    href, 
    src = '', 
    width = '50px',
    height = '50px',
     } = props;

  return (
    <StyledCard
      className={className}
      ref={ref}
      href={href}
      width={width}
      height={height}
    >
      {src && (
        <StyledImage src={src} width={'100%'}
      height={'100%'}/>
      ) }
    </StyledCard>
  );
};

export default React.forwardRef<HTMLDivElement, StyledCardProps>(Card);
