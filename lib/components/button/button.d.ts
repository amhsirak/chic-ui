import React, { ElementType, MouseEventHandler, ReactNode } from 'react';
import { ComponentSize } from '../../tokens/sizes';
import { themeType } from '../../tokens/themes';
interface BaseButtonProps {
    type?: themeType;
    icon?: ElementType;
    size?: ComponentSize;
    className?: string;
    children?: ReactNode;
    disabled?: boolean;
    loading?: boolean;
    search?: boolean;
    typeBtn?: 'button' | 'submit' | 'reset';
    outline?: boolean;
    style?: React.CSSProperties;
}
type HTMLButtonProps = {
    onClick?: MouseEventHandler<HTMLButtonElement>;
} & BaseButtonProps;
type HTMLAnchorProps = {
    href?: string;
} & BaseButtonProps;
type CustomNodeProps = {
    as?: ElementType;
    to?: string;
} & BaseButtonProps;
export type ButtonProps = HTMLButtonProps & HTMLAnchorProps & CustomNodeProps;
declare const _default: React.ForwardRefExoticComponent<{
    onClick?: React.MouseEventHandler<HTMLButtonElement>;
} & BaseButtonProps & {
    href?: string;
} & {
    as?: React.ElementType<any>;
    to?: string;
} & React.RefAttributes<unknown>>;
export default _default;
//# sourceMappingURL=button.d.ts.map