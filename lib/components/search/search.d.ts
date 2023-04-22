import React, { ChangeEventHandler } from 'react';
import { ComponentSize } from '../../tokens/sizes';
export interface SearchProps {
    className?: string;
    size?: ComponentSize;
    width?: string;
    value?: string;
    onChange?: ChangeEventHandler<HTMLInputElement>;
    style?: React.CSSProperties;
    placeholder?: string;
}
declare const _default: React.ForwardRefExoticComponent<SearchProps & React.RefAttributes<HTMLDivElement>>;
export default _default;
//# sourceMappingURL=search.d.ts.map