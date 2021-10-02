import styled from 'styled-components';

interface StyledProgressBar {
color?: string;
 height ?: number;
 width ?: number;
}

export const StyledProgressBar= styled.div<StyledProgressBar>`
    display: inline-block;
    height:${pr=> pr.height}px;
    background-color : ${pr=>pr.color};
    width:  ${pr=>pr.width}%;
`;
 export const StyledLoadingText = styled.span`
position: absolute;
    display: block;
    text-align: center;
    width: 100%;
    height: 100%;
    color:#fff;

`

