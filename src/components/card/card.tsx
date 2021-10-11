import React from 'react';
import { StyledCard, StyledDescription, StyledFooter, StyledFooterText, StyledFooterLink, StyledHeader, StyledImage } from './styled';

export interface StyledCardProps {
  align?:string,
  href?: string;
  width?: string;
  height?: string;
  className?: string;
  src?: string;
  header?: string;
  footer?: string;
  description?: string;
  linkText?: string;
}

export const Card: React.ForwardRefRenderFunction<
  HTMLDivElement,
  StyledCardProps
> = (props, ref) => {
  const { 
    className, 
    href, 
    src, 
    width = '50px',
    height = '50px',
    header,
    footer,
    linkText,
    description,
     } = props;

  return (
    <StyledCard
      className={className}
      ref={ref}
      width={width}
      height={height}
    >
      {src && (
        <StyledImage src={src} width={'100%'}
      height={'100%'}/>
      ) }      
      {header && <StyledHeader children={header}/>}
      {description && <StyledDescription children={description}/>}
      {footer && <StyledFooter>
        <StyledFooterText children={footer}/>
        {href && <StyledFooterLink href={href} children={linkText}/>}
      </StyledFooter> }
    </StyledCard>
  );
};

export default React.forwardRef<HTMLDivElement, StyledCardProps>(Card);
