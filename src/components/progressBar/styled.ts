import styled, { keyframes, css } from 'styled-components';
import { themeType, theme as typeColors } from '../../tokens/themes';

interface StyledProgressBarProps {
  type?: themeType;
  animated?: boolean;
  width?: number;
  striped?: boolean;
  stripedAnimated?: boolean;
}

interface StyledLoadingTextProps {
  type?: themeType;
}

// Animation
const animationAttributes = () =>
  css`
    ${keys} 30s linear infinite
  `;

const keys = keyframes`
    0% { background-position-x: 0vw }
    100% { background-position-x: 100vw }
`;

export const StyledProgressBar = styled.div<StyledProgressBarProps>`
  display: inline-block;
  height: 25px;
  border-radius: 8px;
  background-color: ${(pr) => typeColors[pr.type!].bgColor};
  width: ${(pr) => pr.width}%;
  ${(pr) => pr.animated && `transition: width 1s ease-in-out`};
  ${(pr) =>
    pr.striped &&
    css`
      background-image: linear-gradient(
        135deg,
        hsla(0, 0%, 100%, 0.25) 25%,
        transparent 0,
        transparent 50%,
        hsla(0, 0%, 100%, 0.25) 0,
        hsla(0, 0%, 100%, 0.25) 75%,
        transparent 0,
        transparent
      );
      background-size: 40px 40px;
      background-repeat: repeat;
    `};

  ${(pr) =>
    pr.stripedAnimated &&
    css`
      animation: ${animationAttributes};
    `};
`;

export const StyledProgressWrapper = styled.div`
  position: relative;
  height: 25px;
  background-color: ${typeColors.light.hover};
  width: 100%;
  border-radius: 8px;
`;

export const StyledLoadingText = styled.span<StyledLoadingTextProps>`
  display: flex,
  justifyContent: center,
  alignItems: center
  height: 100%;
  color: ${(pr) => typeColors[pr.type!].color};
  padding-left: 12px;
`;
