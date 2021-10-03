import styled from 'styled-components';
import { themeType, theme as typeColors } from '../../config/themes';


interface StyledBadgeProps {
  innerType: themeType;
  withText: boolean;
  rounded: boolean;
}

// Real tag is assigned dynamically
export const StyledBadge = styled.span<StyledBadgeProps>`
  display: inline-block;
  align-items: center;
  justify-content: center;
  font-size: 12px;
  font-weight: bold;
  border-radius: 8px;
  outline: none;
  padding: 4.3px 15px;
  height: 0 25px;
  background-color: ${(pr) => typeColors[pr.innerType].regular};
  color: ${(pr) => (pr.innerType === 'light' ? '#000' : '#fff')};
  // Rounded
  ${(pr) => (pr.rounded ? `border-radius: 14px;` : '')}
`;
