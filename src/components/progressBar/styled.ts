import styled from 'styled-components';
import { themeType, theme as typeColors } from 'config/themes';

interface StyledProgressBarProps {
  type?: themeType;
  animated?: boolean;
  width?: number;
}

interface StyledLoadingTextProps {
  type?: themeType;
}

export const StyledProgressBar = styled.div<StyledProgressBarProps>`
  display: inline-block;
  height: 25px;
  background-color: ${(pr) => typeColors[pr.type!].bgColor};
  width: ${(pr) => pr.width}%;
  ${(pr) => pr.animated && `transition: width 1s ease-in-out`};
  border-radius: 8px;
`;

export const StyledProgressWrapper = styled.div`
  position: relative;
  height: 25px;
  background-color: #e2e2e2;
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
