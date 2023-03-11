import styled from 'styled-components';
import { themeType, theme as typeColors } from '../../tokens/themes';

interface StyledCircularProgressBarProps {
  type?: themeType;
  degree?: number;
}

export const StyledCircularProgressWrapper = styled.div<StyledCircularProgressBarProps>`
  height: 150px;
  width: 150px;
  background: conic-gradient(
    ${(props) => typeColors[props.type!].bgColor}
      ${(props) => props.degree + 'deg'},
    ${typeColors.light.hover} 0
  );
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const StyledCircularProgressInnerCircle = styled.div`
  height: 120px;
  width: 120px;
  background-color: #fff;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const StyledLoadingText = styled.span`
  font-weight: 700;
  font-size: 20px;
`;
