import React, { ReactNode, ElementType, HTMLAttributes } from 'react';
import { themeType } from 'src/tokens/themes';
export interface LinkProps extends Omit<HTMLAttributes<HTMLAnchorElement>, 'as' | 'disabled'> {
    disabled?: boolean;
    className?: string;
    children: ReactNode;
    as?: ElementType;
    href: string;
    type?: themeType;
    style?: React.CSSProperties;
}
declare const _default: React.ForwardRefExoticComponent<LinkProps & React.RefAttributes<HTMLAnchorElement>>;
export default _default;
//# sourceMappingURL=link.d.ts.map