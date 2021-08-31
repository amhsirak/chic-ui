import styled from 'styled-components';
import { spinnerWidth } from './sizes';

interface StyledSpinnerProps {
    size: number;
    light: boolean;
}

export const StyledSpinner = styled.span<StyledSpinnerProps>`
    box-sizing: border-box;
    display: block;
    border-radius: 50%;
    border: ${ pr => spinnerWidth(pr.size)}px solid transparent;
    border-top: ${pr => spinnerWidth(pr.size)}px solid ${pr => pr.light ? '#f7f7f7' :  '#3d4ed1'};
    border-right: ${pr => spinnerWidth(pr.size)}px solid ${pr => pr.light ? '#f7f7f7' :  '#3d4ed1'};
    border-bottom: ${pr => spinnerWidth(pr.size)}px solid ${pr => pr.light ? '#f7f7f7' :  '#3d4ed1'};
    width: ${pr => pr.size}px;
    height: ${pr => pr.size}px;
    animation: spin 1s linear infinite;

    @keyframes spin {
        0% { transform: rotate(0deg); }
        100% { transform: rotate(360deg); }
    }

`;