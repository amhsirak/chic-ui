import React, { ElementType, ReactNode } from 'react';
import styled from 'styled-components';
import { ComponentSize } from '../../config/sizes';
import { StyledBadge } from './styled';

export type BadgeType = 'default' | 'secondary' | 'danger' | 'warning' | 'success'| 'light';

export interface BaseBadgeProps {
    type?: string;
    rounded?: boolean;
    //circle?: boolean;
    className?: string;
    children?: ReactNode;
    size?: ComponentSize;
}

// If `as` is added, badge becomes a custom html node specified in `as`
export type BadgeProps = {
    as?: ElementType
    to?: string;
} & BaseBadgeProps;

const Badge: React.ForwardRefRenderFunction<unknown, BadgeProps> = (props, ref) => {
    const {
        type = 'default',
        rounded = false,
        // circle = false,
        className,
        children,
        size = 'default',
        as,
        to
    } = props;

    const styles = {
        innerType: type,
        size,
        withText: children != null,
        rounded,
        //circle
    }
    
    if (as) {
        return (
            <StyledBadge
                as={as}
                to={to}
                ref={ref}
                className={className}
                {...styles}
            >
                {children}
            </StyledBadge>
        )
    }

    return (
        <StyledBadge
            as={as}
            type='span'
            ref={ref as React.MutableRefObject<HTMLSpanElement>}
            className={className}
            {...styles}
        >
            {children}
        </StyledBadge>
    )
}


export default React.forwardRef<unknown, BadgeProps>(Badge);
