import React, { ElementType, ReactNode } from 'react';
import { themeType } from '../../tokens/themes';
export interface BaseTagProps {
    type?: themeType;
    rounded?: boolean;
    className?: string;
    children?: ReactNode;
    style?: React.CSSProperties;
}
export type TagProps = {
    as?: ElementType;
    to?: string;
} & BaseTagProps;
declare const _default: React.ForwardRefExoticComponent<{
    as?: React.ElementType<any>;
    to?: string;
} & BaseTagProps & React.RefAttributes<unknown>>;
export default _default;
//# sourceMappingURL=tag.d.ts.map