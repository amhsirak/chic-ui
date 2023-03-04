import React, { useCallback } from 'react';
import {
  StyledAlert,
  StyledTitle,
  StyledMessage,
  StyledDismissible,
  StyledRow
} from './styled';

import { themeType } from '../../tokens/themes';

interface BaseAlertProps {
  type?: themeType;
  className?: string;
  title: string;
  message: string;
  dismissible?: boolean;
  onClose?: () => void;
  show?: boolean;
  style?: React.CSSProperties;
}

export type AlertProps = BaseAlertProps;

const Alert: React.ForwardRefRenderFunction<unknown, AlertProps> = (
  props,
  ref
) => {
  const {
    type = 'primary',
    className,
    children,
    title,
    message,
    dismissible,
    show = true,
    onClose,
    style
  } = props;

  const styles = {
    innerType: type,
    withText: children != null
  };

  const handleOnClose = useCallback(() => {
    if (show && onClose) {
      onClose();
    }
  }, [onClose, show]);

  return (
    <>
      {show && (
        <StyledAlert className={className} style={style} {...styles}>
          <StyledRow>
            <StyledTitle>{title && title}</StyledTitle>
            {dismissible && <StyledDismissible onClick={handleOnClose} />}
          </StyledRow>
          <StyledMessage>{message && message}</StyledMessage>
        </StyledAlert>
      )}
    </>
  );
};

export default React.forwardRef<unknown, AlertProps>(Alert);
