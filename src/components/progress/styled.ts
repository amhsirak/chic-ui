import { ReactNode } from 'react';
import styled, { css } from 'styled-components';
import { ProgressType } from './progress';

interface StyledProgressProps {
    label?: ReactNode;
    progress?: number;
    type?: ProgressType;
    striped?: boolean;
    animated?: boolean;
}

export const StyledProgressWrapper =  styled.div`
    height: 20%,
    width: 100%;
    background-color: #e0e0de;
    border-radius: 50%,
    margin: 50%;
`;

const StyledLabel = css`
    padding: 5px;
    color: #ffff;
    font-weight: bold;
`;

export const StyledProgress = css<StyledProgressProps>`
    height: 100%;
    width: 100%;
    background-color: #00000;
    border-radius: inherit;
    text-align: right;
    ${pr => pr.label && StyledLabel};
`;