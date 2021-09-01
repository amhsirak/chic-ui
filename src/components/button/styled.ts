import styled from 'styled-components';
import { ComponentSize, heights, sidePaddings } from '../../config/sizes';
import { ButtonType } from './button';

type StateColors = {
    regular: string;
    hover: string;
}

const typeColors: {
    [key in ButtonType]: StateColors
} = {
    default: {
        regular: '#0018cf',
        hover: '#001be8',
    },
    secondary: {
        regular: '#000',
        hover: '#212121',
    },
    danger: {
        regular: '#d93848',
        hover: '#eb4d5d',
    },
    warning: {
        regular: '#de9b00',
        hover: '#eba607'
    },
    success: {
        regular: '#039e2f',
        hover: '#03a832'
    },
    light: {
        regular: 'transparent',
        hover: '#dbdbdb',
    }
};

interface StyledButtonProps {
    innerType: ButtonType;
    size: ComponentSize;
    withText: boolean;
}

// Real tag is assigned dynamically
export const StyledButton =  styled.button<StyledButtonProps>`
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 15px;
    border: none;
    border-radius: 7px;
    outline: none;
    cursor: pointer;
    padding: 0 ${ pr => sidePaddings[pr.size]}px;
    height: ${ pr => heights[pr.size]}px;
    background-color: ${ pr => typeColors[pr.innerType].regular};
    color: ${ pr => pr.innerType === 'light'
            ? '#000'
            : '#fff'
    };
    &:hover {
        background-color: ${ pr => typeColors[pr.innerType].hover};
    }
    &:focus {
        box-shadow: 0 0 0 1px #fff, 0 0 0 2px ${ pr => typeColors[pr.innerType].regular};
    }

    // Add margin for icon and loading
    & > *:nth-child(1) {
        margin-left: ${ pr => pr.withText ? 7 : 0}px;
    }

    // Disabled button logic
    ${ pr => pr.disabled ? `
        background-color: #a6a6a6;
        color: #5e5e5e;
        cursor: not-allowed;

        &:hover {
            background-color: #a6a6a6 !important;
            color: #5e5e5e !important;
        }
        `: ''}
`;