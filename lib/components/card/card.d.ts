import React, { ReactNode } from 'react';
import { themeType } from '../../tokens/themes';
export interface StyledCardProps {
    children?: ReactNode;
    href?: string;
    className?: string;
    src?: string;
    title?: string;
    subTitle?: ReactNode;
    footer?: ReactNode;
    description?: string;
    hrefText?: string;
    type?: themeType;
}
export declare const Card: React.ForwardRefRenderFunction<HTMLDivElement, StyledCardProps>;
declare const _default: React.ForwardRefExoticComponent<StyledCardProps & React.RefAttributes<HTMLDivElement>>;
export default _default;
//# sourceMappingURL=card.d.ts.map