import styled from 'styled-components';
import { SpinnerType } from './spinner';
import { spinnerWidth } from './sizes';

type StateColors = {
    regular: string;
}

const typeColors: {
    [key in SpinnerType]: StateColors
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

};

interface StyledSpinnerProps {
    innerType: SpinnerType;
    size: number;
}

// Real tag is assigned dynamically
export const StyledSpinner =  styled.span<StyledSpinnerProps>`
    box-sizing: border-box;
    display: block;
    border: ${pr => spinnerWidth(pr.size)}px solid transparent;
    border-top: ${pr => spinnerWidth(pr.size)}px solid ${ pr => typeColors[pr.innerType].regular};
    border-right: ${pr => spinnerWidth(pr.size)}px solid ${ pr => typeColors[pr.innerType].regular};
    border-bottom: ${pr => spinnerWidth(pr.size)}px solid ${ pr => typeColors[pr.innerType].regular};
    border-radius: 50%;
    width: ${pr => pr.size}px;
    height: ${pr => pr.size}px;
    animation: spin 1s linear infinite;
    @keyframes spin {
        0% { transform: rotate(0deg); }
        100% { transform: rotate(360deg); }
    }
`;