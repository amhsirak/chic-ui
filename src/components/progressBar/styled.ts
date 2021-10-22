import styled from 'styled-components';
import { themeType, theme as typeColors } from '../../config/themes';

interface StyledProgressBar {
  type?: themeType;
  width?: number;
}

export const StyledProgressBar = styled.div<StyledProgressBar>`
  display: inline-block;
  height: 25px;
  background-color: ${(pr) => typeColors[pr.type!].regular};
  width: ${(pr) => pr.width}%;
  transition: width 1s ease-in-out,
`;

export const StyledProgressWrapper = styled.div`
  position: relative;
  height: 25px;
  background-color: #E2E2E2;
  width: 100%;
`;

export const StyledLoadingText = styled.span`
  display: flex,
  justifyContent: center,
  alignItems: center
  height: 100%;
  color: #fff;
`;
