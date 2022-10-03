import styled from 'styled-components';
import { themeType, theme as typeColors } from '../../tokens/themes';
import Cross from '../../icons/Cross';

interface StyledAlertProps {
  innerType: themeType;
  withText: boolean;
}

// Real tag is assigned dynamically
export const StyledAlert = styled.div<StyledAlertProps>`
  box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
  box-sizing: border-box;
  padding: 15px 30px;
  align-items: left;
  border: none;
  border-radius: 3px;
  outline: none;
  // width: 300px;
  margin-right: 3px;
  margin-bottom: 10px;
  background-color: ${(pr) => typeColors[pr.innerType].bgColor};
  color: ${(pr) => typeColors[pr.innerType].color};
  &:hover {
    background-color: ${(pr) => typeColors[pr.innerType].hover};
  }
  &:focus {
    outline: none;
  }
`;

export const StyledIcon = styled.div`
  height: 20px;
`;
export const StyledTitle = styled.div`
  font-size: 15px;
  font-weight: 600;
  width: 100%;
`;
export const StyledMessage = styled.div`
  padding-top: 3px;
  font-size: 13px;
`;
export const StyledRow = styled.div`
  display: flex;
  align-items: center;
`;
export const StyledDismissible = styled(Cross)`
  float: right;
  width: 10px;
  cursor: pointer;
  fill: #c9c9c9;
  stroke: #c9c9c9;
  stroke-width: 53px;
`;
