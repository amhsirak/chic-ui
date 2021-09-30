import React, { ElementType, ReactNode } from 'react';
export declare type BadgeType = 'default' | 'secondary' | 'danger' | 'warning' | 'success' | 'light';
export interface BaseBadgeProps {
    type?: string;
    rounded?: boolean;
    className?: string;
    children?: ReactNode;
}
export declare type BadgeProps = {
    as?: ElementType;
    to?: string;
} & BaseBadgeProps;
declare const _default: React.ForwardRefExoticComponent<{
    as?: React.ElementType<any> | undefined;
    to?: string | undefined;
} & BaseBadgeProps & React.RefAttributes<unknown>>;
export default _default;
//# sourceMappingURL=badge.d.ts.map