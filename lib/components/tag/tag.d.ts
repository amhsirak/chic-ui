import React, { ElementType, ReactNode } from 'react';
import { themeType } from '../../tokens/themes';
export interface BaseTagProps {
    type?: themeType;
    rounded?: boolean;
    className?: string;
    children?: ReactNode;
}
export declare type TagProps = {
    as?: ElementType;
    to?: string;
} & BaseTagProps;
declare const _default: React.ForwardRefExoticComponent<{
    as?: React.ElementType<any> | undefined;
    to?: string | undefined;
} & BaseTagProps & React.RefAttributes<unknown>>;
export default _default;
//# sourceMappingURL=tag.d.ts.map