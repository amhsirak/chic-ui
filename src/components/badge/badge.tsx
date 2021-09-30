import React, { ElementType, ReactNode } from 'react';
import styled from 'styled-components';
import { ComponentSize } from '../../config/sizes';
import { StyledBadge } from './styled';

export type BadgeType = 'default' | 'secondary' | 'danger' | 'warning' | 'success'| 'light';

export interface BaseBadgeProps {
    type?: string;
    rounded?: boolean;
    className?: string;
    children?: ReactNode;
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
        className,
        children,
        as,
        to
    } = props;

    const styles = {
        innerType: type,
        withText: children != null,
        rounded,
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
