import { ReactElement } from 'react';
import { ToastElement, ToastIcon, ToastMessage, ToastTitle } from './styled';
import { themeType, theme } from 'config/themes';

export interface ToastProps {
  title: string;
  message?: string;
  type?: themeType;
  onClose?: () => void;
  icon?: React.ElementType & React.ReactNode;
}

function Toast({
  title,
  message = '',
  type = 'primary',
  icon,
  onClose = () => {}
}: ToastProps): ReactElement {
  return (
    <ToastElement
      style={{
        backgroundColor: theme[type].bgColor,
        color:theme[type].color
      }}
    >
      <button onClick={() => onClose()}>X</button>
      { icon && <ToastIcon as={icon} /> }
      <div>
        <ToastTitle>{title}</ToastTitle>
        <ToastMessage>{message}</ToastMessage>
      </div>
    </ToastElement>
  );
}

export default Toast;
