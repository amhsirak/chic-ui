import styled from 'styled-components';
import { themeType, theme as typeColors } from '../../config/themes';

interface StyledTagProps {
  innerType: themeType;
  withText: boolean;
  rounded: boolean;
}

// Real HTML tag is assigned dynamically
export const StyledTag = styled.span<StyledTagProps>`
  display: inline-block;
  align-items: center;
  justify-content: center;
  font-size: 12px;
  font-weight: bold;
  border-radius: 8px;
  outline: none;
  padding: 4.6px 15px;
  height: 0 25px;
  background-color: ${(pr) => typeColors[pr.innerType].regular};
  color: ${(pr) => (pr.innerType === 'light' ? '#000' : '#fff')};
  // Rounded
  ${(pr) => (pr.rounded ? `border-radius: 14px;` : '')}
`;
