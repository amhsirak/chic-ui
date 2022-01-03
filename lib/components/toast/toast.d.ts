import React from 'react';
import { themeType } from 'config/themes';
export interface ToastProps {
    id: string;
    close: () => void;
    type?: themeType;
    title: string;
    message?: string;
    icon?: React.ElementType;
    duration?: number;
}
declare const _default: React.NamedExoticComponent<ToastProps>;
export default _default;
//# sourceMappingURL=toast.d.ts.map