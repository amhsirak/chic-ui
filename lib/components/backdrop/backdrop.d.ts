import React, { MouseEventHandler } from 'react';
export interface BackdropProps {
    visible?: boolean;
    color?: string;
    onClick?: MouseEventHandler<HTMLDivElement>;
    style?: React.CSSProperties;
    className?: string;
    children?: React.ReactNode;
}
export declare const Backdrop: React.ForwardRefRenderFunction<HTMLDivElement, BackdropProps>;
declare const _default: React.ForwardRefExoticComponent<BackdropProps & React.RefAttributes<HTMLDivElement>>;
export default _default;
//# sourceMappingURL=backdrop.d.ts.map