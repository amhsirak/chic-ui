import { ReactElement } from 'react';
import { AlertElement, AlertImage, AlertMessage, AlertTitle } from './styled';
import { alertType, alertTheme } from '../../config/themes'

export interface AlertProps {
  title: string;
  message?: string;
  type: alertType;
  onClose?: () => void;
}

function Alert({
  title,
  message = '',
  type,
  onClose = () => {}
}: AlertProps): ReactElement {
  return (
    <AlertElement
      style={{
        backgroundColor: alertTheme[type].regular
      }}
    >
      <button onClick={() => onClose()}>X</button>
      <AlertImage>
        <img src={alertTheme[type].icon} alt="" />
      </AlertImage>
      <div>
        <AlertTitle>{title}</AlertTitle>
        <AlertMessage>{message}</AlertMessage>
      </div>
    </AlertElement>
  );
}

export default Alert;
