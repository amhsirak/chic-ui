import React, { ReactNode } from 'react';
import { themeType } from '../../tokens/themes';
import {
  StyledCard,
  StyledCardItem,
  StyledDescription,
  StyledFooter,
  StyledFooterText,
  StyledFooterLink,
  StyledTitle,
  StyledSubTitle,
  StyledImage
} from './styled';

export interface StyledCardProps {
  children?: ReactNode;
  href?: string;
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
    title,
    subTitle,
    children,
    footer,
    hrefText,
    description,
    type = 'light'
  } = props;

  return (
    <StyledCard>
      <StyledCardItem
        className={className}
        ref={ref as React.MutableRefObject<HTMLDivElement>}
        type={type}
      >
        {src && <StyledImage src={src} width={'100%'} height={'100%'} />}
        {title && <StyledTitle children={title} />}
        {subTitle && <StyledSubTitle children={subTitle} />}
        {description && <StyledDescription children={description} />}
        {footer && (
          <StyledFooter>
            <StyledFooterText children={footer} />
            {href && <StyledFooterLink href={href} children={hrefText} />}
          </StyledFooter>
        )}
        {children}
      </StyledCardItem>
    </StyledCard>
  );
};

export default React.forwardRef<HTMLDivElement, StyledCardProps>(Card);
