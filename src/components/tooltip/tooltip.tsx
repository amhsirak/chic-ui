import React from "react";
import { themeType } from 'src/tokens/themes';
import { StyledTooltip } from "./styled";

export type placementType = 'top' | 'right' | 'bottom' | 'left'

interface BaseTooltipProps {
    type?: themeType;
    placement?: placementType,
    className?: string,
    content?: JSX.Element | string 
    style?: React.CSSProperties
}

export type TooltipProps = BaseTooltipProps

const Tooltip: React.ForwardRefRenderFunction<HTMLDivElement, TooltipProps> = (props, ref) => {

    const {placement, className, content, type = 'primary', style } = props

    const styles = {
        colorType: type
    }

    return (
        <StyledTooltip type="button" aria-label={`${content}`} placement={placement} className={className} style={style}     {...styles}>
            Tooltip on {placement}
        </StyledTooltip>
    )
}

export default React.forwardRef<HTMLDivElement, TooltipProps>(Tooltip);

