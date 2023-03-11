import { themeType, theme as typeColors } from '../../tokens/themes';
import styled from 'styled-components';

interface StyledLinkProps {
  disabled: boolean;
  type: themeType;
}

export const StyledLink = styled.a<StyledLinkProps>`
  display: inline-block;
  box-sizing: border-box;
  color:${(pr) => typeColors[pr.type].bgColor};
  cursor: pointer;
  text-decoration: none;
  margin: 0;
  padding: 0;
  font-size: 15px;
  &:active,
  &:visited {
    color: ${(pr) => typeColors[pr.type].bgColor};
    text-decoration: none;
  }
  &:focus,
  &:hover {
    color: ${(pr) => typeColors[pr.type].hover};
  }
  ${(pr) =>
    pr.disabled &&
    `
        cursor: not-allowed;
        &, &:focus, &:visited, &:hover {
            color: #5e5e5e;
        }
    `}
`;
