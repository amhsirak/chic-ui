import React from 'react';
export type Placement = 'left' | 'right' | 'top' | 'bottom';
export interface DrawerProps {
    size?: 'default' | 'large';
    closable?: boolean;
    closeIcon?: React.ReactNode;
    onClose?: () => void;
    placement?: Placement;
    open?: boolean;
    className?: string;
    /** Container */
    container?: HTMLElement;
    /** Wrapper dom node style of header and body */
    drawerStyle?: React.CSSProperties;
    headerStyle?: React.CSSProperties;
    bodyStyle?: React.CSSProperties;
    footerStyle?: React.CSSProperties;
    /** Dom Nodes */
    header?: React.ReactNode;
    footer?: React.ReactNode;
    children?: React.ReactNode;
    /** Height for top and bottom placement. Will override size property  */
    height?: number;
    /** Width for top and bottom placement. Will override size property  */
    width?: number;
    style?: React.CSSProperties;
}
declare const _default: React.ForwardRefExoticComponent<DrawerProps & React.RefAttributes<HTMLDivElement>>;
export default _default;
//# sourceMappingURL=drawer.d.ts.map