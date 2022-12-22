import { theme as typeColors, themeType } from "../../tokens/themes";
import styled from "styled-components";
import { placementType } from "./tooltip";

interface StyledTooltipTextProps {
    placement?: placementType,
    colorType: themeType
}

export const StyledTooltip = styled.button<StyledTooltipTextProps>`
    position: relative;
    padding: 10px;
    margin: 20px 5px 0 5px;
    font-size: 12px;
    font-weight: bold;
    font-family: sans-serif;
    background: #c2c2c2;
    color: black;
    text-align: center;
    cursor: pointer;
    border-radius: 5px;
    border: none;

    &:hover {
        color: white;
        background-color: #585858;
    }

    &::before {
        content: attr(aria-label);
        position: absolute;
        z-index: 2;
        max-width: 200px;
        width: 100px;
        padding: 5px 8px;
        font-size: 12px;
        line-height: 1.4;
        border-radius: 5px;
        background-color: ${(pre) => typeColors[pre.colorType].bgColor};
        color: ${(pre) => typeColors[pre.colorType].color};
        display: none;
    }

    &::after {
        content: "";
        position: absolute;
        z-index: 1;
        display: none;
        width: 0;
        height: 0;
        border: 5px solid transparent;
    }

    &:hover:before {
        display: inline-block;
    }

    &:hover:after {
        display: inline-block;
    }

    ${(pre) => pre.placement === 'top' ? ` &::before { bottom: calc(100% + 5px); left: 50%; transform: translateX(-50%); } &::after { bottom: 100%; left: 50%; transform: translateX(-50%); border-bottom-width: 0; border-top-color: ${typeColors[pre.colorType].bgColor}` :
        pre.placement === 'left' ? `&::before { top: 50%; right: calc(100% + 5px); transform: translateY(-50%); } &::after { top: 50%; right: 100%; transform: translateY(-50%); border-right-width: 0; border-left-color: ${typeColors[pre.colorType].bgColor};}` :
            pre.placement === 'bottom' ? `&::before { top: calc(100% + 5px); left: 50%; transform: translateX(-50%); } &::after { top: 100%; left: 50%; transform: translateX(-50%); border-top-width: 0; border-bottom-color: ${typeColors[pre.colorType].bgColor}; }` :
                `&::before { top: 50%; left: calc(100% + 5px);transform: translateY(-50%); } &::after { top: 50%; left: 100%; transform: translateY(-50%); border-left-width: 0; border-right-color: ${typeColors[pre.colorType].bgColor}; }`}

    
`
