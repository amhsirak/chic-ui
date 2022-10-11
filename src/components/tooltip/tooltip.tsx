import React from "react";
import { themeType } from 'src/tokens/themes';
import { StyledTooltip } from "./style";

export type placementType = 'top' | 'right' | 'bottom' | 'left'

interface BaseTooltipProps {
    type?: themeType;
    placement?: placementType,
    className?: string,
    content?: JSX.Element | string 
}

export type TooltipProps = BaseTooltipProps

const Tooltip: React.ForwardRefRenderFunction<HTMLDivElement, TooltipProps> = (props, ref) => {

    const {placement, className, content, type = 'primary' } = props

    const styles = {
        colorType: type
    }

    return (
        <StyledTooltip type="button" aria-label={`${content}`} placement={placement} className={className}      {...styles}>
            Tooltip on {placement}
        </StyledTooltip>
    )
}

export default React.forwardRef<HTMLDivElement, TooltipProps>(Tooltip);

