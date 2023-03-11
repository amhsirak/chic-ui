import React from "react";
import { themeType } from 'src/tokens/themes';
export type placementType = 'top' | 'right' | 'bottom' | 'left';
interface BaseTooltipProps {
    type?: themeType;
    placement?: placementType;
    className?: string;
    content?: JSX.Element | string;
    style?: React.CSSProperties;
}
export type TooltipProps = BaseTooltipProps;
declare const _default: React.ForwardRefExoticComponent<BaseTooltipProps & React.RefAttributes<HTMLDivElement>>;
export default _default;
//# sourceMappingURL=tooltip.d.ts.map