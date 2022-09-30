import React, { ChangeEventHandler, HTMLAttributes } from 'react';
import { ComponentSize } from '../../tokens/sizes';
export interface TextInputProps extends Omit<HTMLAttributes<HTMLInputElement>, 'size' | 'disabled' | 'onChange'> {
    size?: ComponentSize;
    disabled?: boolean;
    icon?: React.ElementType;
    error?: boolean;
    width?: string;
    value?: string;
    onChange?: ChangeEventHandler<HTMLInputElement>;
    readonly?: boolean;
    clearable?: boolean;
    [key: string]: any;
}
declare const _default: React.ForwardRefExoticComponent<Pick<TextInputProps, keyof TextInputProps> & React.RefAttributes<HTMLInputElement>>;
export default _default;
//# sourceMappingURL=text-input.d.ts.map