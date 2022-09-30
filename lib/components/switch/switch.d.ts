import React from 'react';
import { ComponentSize } from '../../tokens/sizes';
import { themeType } from '../../tokens/themes';
export interface SwitchProps {
    size?: ComponentSize;
    type?: themeType;
    padding?: ComponentSize;
    checked?: boolean;
    onChange?: () => void;
    disabled?: boolean;
    className?: string;
}
export declare const Switch: React.ForwardRefRenderFunction<HTMLInputElement, SwitchProps>;
declare const _default: React.ForwardRefExoticComponent<SwitchProps & React.RefAttributes<HTMLInputElement>>;
export default _default;
//# sourceMappingURL=switch.d.ts.map