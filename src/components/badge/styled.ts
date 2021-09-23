import styled from 'styled-components';
import { ComponentSize, badgeHeights, badgeSidePaddings } from '../../config/sizes';
import { BadgeType } from './badge';

type StateColors = {
    regular: string;
}

const typeColors: {
    [key in BadgeType]: StateColors
} = {
    default: {
        regular: '#0018cf'
    },
    secondary: {
        regular: '#000'
    },
    danger: {
        regular: '#d93848'
    },
    warning: {
        regular: '#de9b00'
    },
    success: {
        regular: '#039e2f'
    },
    light: {
        regular: '#edede4'
    }
}

interface StyledBadgeProps {
    innerType: BadgeType;
    size: ComponentSize;
    withText: boolean;
}

// Real tag is assigned dynamically
export const StyledBadge =  styled.button<StyledBadgeProps>`
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 12px;
    border: none;
    border-radius: 8px;
    outline: none;
    cursor: pointer;
    padding: 0 ${ pr => badgeSidePaddings[pr.size]}px;
    height: ${ pr => badgeHeights[pr.size]}px;
    background-color: ${ pr => typeColors[pr.innerType].regular};
    color: ${ pr => pr.innerType === 'light'
            ? '#000'
            : '#fff'
    };
`;