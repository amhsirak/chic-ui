import React, { ReactNode } from 'react';
import { themeType } from 'src/config/themes';
import { StyledCard, StyledDescription, StyledFooter, StyledFooterText, StyledFooterLink, StyledTitle, StyledSubTitle, StyledImage } from './styled';

export interface StyledCardProps {
  align?:string,
  children?: ReactNode;
  href?: string;
  width?: string;
  height?: string;
  className?: string;
  src?: string;
  title?: string;
  subTitle?: ReactNode;
  footer?: ReactNode;
  description?: string;
  hrefText?: string;
  type?: themeType;
}

export const Card: React.ForwardRefRenderFunction<
  HTMLDivElement,
  StyledCardProps
> = (props, ref) => {
  const { 
    className, 
    href, 
    src, 
    width = '300px',
    height = '200px',
    title,
    subTitle,
    children,
    footer,
    hrefText,
    description,
    type= 'light'
    } = props;

  return (
    <StyledCard
      className={className}
      ref={ref}
      width={width}
      height={height}
      type={type}
    >
      {src && (
        <StyledImage src={src} width={'100%'}
      height={'100%'}/>
      ) }      
      {title && <StyledTitle children={title}/>}
      {subTitle && <StyledSubTitle children={subTitle}/>}
      {description && <StyledDescription children={description}/>}
      {footer && <StyledFooter>
        <StyledFooterText children={footer}/>
        {href && <StyledFooterLink href={href} children={hrefText}/>}
      </StyledFooter> }
      {children}
    </StyledCard>
  );
};

export default React.forwardRef<HTMLDivElement, StyledCardProps>(Card);
