import React, { ReactNode, ElementType, HTMLAttributes } from 'react';
export interface LinkProps extends Omit<HTMLAttributes<HTMLAnchorElement>, 'as' | 'disabled'> {
    disabled?: boolean;
    className?: string;
    children: ReactNode;
    as?: ElementType;
    href?: string;
}
declare const _default: React.ForwardRefExoticComponent<LinkProps & React.RefAttributes<HTMLAnchorElement>>;
export default _default;
//# sourceMappingURL=link.d.ts.map