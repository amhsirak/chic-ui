import React, { ReactElement } from 'react';
import check from './icons/check.svg';
import error from './icons/error.svg';
import info from './icons/info.svg';
import warning from './icons/warning.svg';
import { ToastElement, ToastImage, ToastMessage, ToastTitle } from './styled';

export interface ToastProps {
  title: string;
  message?: string;
  type: 'success' | 'error' | 'info' | 'warning';
  onClose?: () => void;
}

const toastAlternatives = {
  success: { backgroundColor: '#5cb85c', icon: check },
  error: { backgroundColor: '#d9534f', icon: error },
  info: { backgroundColor: '#5bc0de', icon: info },
  warning: { backgroundColor: '#f0ad4e', icon: warning }
};
function Toast({
  title,
  message = '',
  type,
  onClose = () => {}
}: ToastProps): ReactElement {
  return (
    <ToastElement
      style={{
        backgroundColor: toastAlternatives[type].backgroundColor
      }}
    >
      <button onClick={() => onClose()}>X</button>
      <ToastImage>
        <img src={toastAlternatives[type].icon} alt="" />
      </ToastImage>
      <div>
        <ToastTitle>{title}</ToastTitle>
        <ToastMessage>{message}</ToastMessage>
      </div>
    </ToastElement>
  );
}

export default Toast;
