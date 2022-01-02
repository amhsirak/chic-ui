import React, { useEffect } from 'react';
import {
  ToastElement,
  ToastTitle,
  ToastMessage,
  ToastIcon,
} from 'components/toast/styled';
import { themeType, theme } from 'config/themes';

export interface ToastProps {
  id: string;
  close: () => void;
  type?: themeType;
  title: string;
  message?: string;
  icon?: React.ElementType;
  duration?: number;
}

const Toast: React.FC<ToastProps> = (props) => {
  const { close, message, title, duration = 0, id, type='primary', icon } = props;

  useEffect(() => {
    if (!duration) return;

    const timer = setTimeout(() => {
      close();
    }, duration);

    return () => clearTimeout(timer);
  }, [close, duration]);

  return (
    <div>
        <ToastElement  
            style={{
              backgroundColor: theme[type].bgColor,
              color:theme[type].color
            }}
            >
              <button onClick={close}>X</button>
              { icon && <ToastIcon as={icon} /> }
              <div>
                <ToastTitle>{title}</ToastTitle>
                <ToastMessage>{message}</ToastMessage>
              </div>
            </ToastElement>
    </div>
  );
};

export default Toast;
