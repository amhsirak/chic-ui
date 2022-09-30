import styled from 'styled-components';
import { themeType, theme as typeColors } from '../../tokens/themes';

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
  font-size: 11px;
  font-weight: bold;
  border-radius: 4px;
  outline: none;
  padding: 3.3px 14px;
  height: 0 23px;
  background-color: ${(pr) => typeColors[pr.innerType].bgColor};
  color: ${(pr) => (pr.innerType === 'light' ? '#000' : '#fff')};
  // Rounded
  ${(pr) => (pr.rounded ? `border-radius: 14px;` : '')}
`;
