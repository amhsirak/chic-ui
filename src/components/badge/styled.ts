import styled from 'styled-components';
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
    withText: boolean;
    rounded: boolean;
}

// Real tag is assigned dynamically
export const StyledBadge =  styled.span<StyledBadgeProps>`
    display: inline-block;
    align-items: center;
    justify-content: center;
    font-size: 12px;
    font-weight: bold;
    border-radius: 8px;
    outline: none;
    padding: 4.6px 15px;
    height: 0 25px;
    background-color: ${ pr => typeColors[pr.innerType].regular};
    color: ${pr => pr.innerType === 'light'
            ? '#000'
            : '#fff'
    };
    // Rounded 
    ${pr => pr.rounded ? `border-radius: 14px;`: ''}
`;