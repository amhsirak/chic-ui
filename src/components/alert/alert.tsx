import React, { ElementType } from 'react';
import { StyledAlert, StyledTitle, StyledMessage } from './styled';
import { themeType } from '../../tokens/themes';

interface BaseAlertProps {
  type?: themeType;
  className?: string;
  title: string;
  message: string;
}

export type AlertProps = BaseAlertProps;

const Alert: React.ForwardRefRenderFunction<unknown, AlertProps> = (
  props,
  ref
) => {
  const { type = 'primary', className, children, title, message } = props;

  const styles = {
    innerType: type,
    withText: children != null
  };

  return (
    <StyledAlert className={className} {...styles}>
      <StyledTitle>{title && title}</StyledTitle>
      <StyledMessage>{message && message}</StyledMessage>
    </StyledAlert>
  );
};

export default React.forwardRef<unknown, AlertProps>(Alert);
