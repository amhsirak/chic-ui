import React from "react";
import { StyledSpinner } from "./styled";

export type SpinnerType = 'blue' | 'secondary' | 'danger' | 'warning' | 'success' | 'default';

export interface SpinnerProps {
    type?: SpinnerType;
    size?: number
    className?: string;
}

const Spinner: React.ForwardRefRenderFunction<HTMLDivElement, SpinnerProps> = (props, ref) => {
    const {
        type = 'default',
        size = 50,
        className,
    } = props;

    const styles = {
        innerType: type,
        size,
    }

    return (
        <StyledSpinner
            ref={ref}
            className={className}
            {...styles}
        />
    )
    
}

export default React.forwardRef<HTMLDivElement, SpinnerProps>(Spinner);