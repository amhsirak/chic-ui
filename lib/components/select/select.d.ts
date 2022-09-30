import React from 'react';
import { ComponentSize } from '../../tokens/sizes';
export interface SelectProps<T> {
    className?: string;
    size?: ComponentSize;
    width?: string;
    data?: T[];
    disabled?: boolean;
    dataKey?: string;
    multiSelect?: boolean;
    dataName?: string;
    error?: boolean;
    placeholder?: string;
    onChange?: (value: T | T[]) => void;
}
declare const _default: React.ForwardRefExoticComponent<SelectProps<any> & React.RefAttributes<HTMLDivElement>>;
export default _default;
//# sourceMappingURL=select.d.ts.map