import React from 'react';
import { themeType } from '../../tokens/themes';
export type BadgeProps = {
    count?: number;
    limit?: number;
    type?: themeType;
    showZero?: boolean;
    showCount?: boolean;
    offset?: [number, number];
    style?: React.CSSProperties;
    className?: string;
};
declare const _default: React.ForwardRefExoticComponent<BadgeProps & {
    children?: React.ReactNode;
} & React.RefAttributes<HTMLDivElement>>;
export default _default;
//# sourceMappingURL=badge.d.ts.map