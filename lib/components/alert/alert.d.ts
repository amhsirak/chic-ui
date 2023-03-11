import React from 'react';
import { themeType } from '../../tokens/themes';
interface BaseAlertProps {
    type?: themeType;
    className?: string;
    title: React.ReactNode;
    message: React.ReactNode;
    dismissible?: boolean;
    onClose?: () => void;
    show?: boolean;
    style?: React.CSSProperties;
}
export type AlertProps = BaseAlertProps;
declare const _default: React.ForwardRefExoticComponent<BaseAlertProps & React.RefAttributes<unknown>>;
export default _default;
//# sourceMappingURL=alert.d.ts.map