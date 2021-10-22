import styled from 'styled-components';
import { themeType, theme as typeColors } from '../../config/themes';

interface StyledProgressBar {
  type?: themeType;
  width?: number;
}

interface StyledProgressWrapper {
  width?: number;
}

export const StyledProgressBar = styled.div<StyledProgressBar>`
  display: inline-block;
  height: 25px;
  background-color: ${(pr) => typeColors[pr.type!].regular};
  width: ${(pr) => pr.width}%;
`;

export const StyledProgressWrapper = styled.div<StyledProgressWrapper>`
  position: relative;
  height: 25px;
  background-color: #E2E2E2;
  width: ${(pr) => pr.width}%;
`;

export const StyledLoadingText = styled.span`
  position: absolute;
  display: block;
  text-align: center;
  width: 100%;
  height: 100%;
  color: #fff;
`;
