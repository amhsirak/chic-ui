import React, { ElementType, ReactNode } from 'react';
import styled from 'styled-components';
import { ComponentSize } from '../../config/sizes';

export type BadgeType = 'default' | 'secondary' | 'danger' | 'warning' | 'success'| 'light';

export interface BaseBadgeProps {
    type?: string;
    rounded?: boolean;
    className?: string;
    children?: ReactNode;
    size?: ComponentSize;
}

// If `as` is added, badge becomes a custom html node specified in `as`
type CustomNodeProps = {
    as?: ElementType
    to?: string;
} & BaseBadgeProps;

export type BadgeProps = CustomNodeProps;
