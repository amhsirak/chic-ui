import React from "react";
import { StyledTooltip } from "./style";

export type placementType = 'top' | 'right' | 'bottom' | 'left'

interface BaseTooltipProps {
    placement?: placementType,
    className?: string,
    content?: JSX.Element | string 
}

export type TooltipProps = BaseTooltipProps

const Tooltip: React.ForwardRefRenderFunction<HTMLDivElement, TooltipProps> = (props, ref) => {

    const {placement, className, content} = props

    return (
        <StyledTooltip type="button" aria-label={`${content}`} placement={placement} className={className}>
            Tooltip on {placement}
        </StyledTooltip>
    )
}

export default React.forwardRef<HTMLDivElement, TooltipProps>(Tooltip);

