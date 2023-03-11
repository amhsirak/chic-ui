import styled from 'styled-components';
import { ComponentSize, heights, sidePaddings } from '../../tokens/sizes';
import { themeType, theme as typeColors } from '../../tokens/themes';

interface StyledButtonProps {
  innerType: themeType;
  size: ComponentSize;
  withText: boolean;
  isSearch: boolean;
  outline: boolean;
}

// Real tag is assigned dynamically
export const StyledButton = styled.button<StyledButtonProps>`
  box-sizing: border-box;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  font-size: 15px;
  border: ${(pr) =>
    pr.outline ? `1px solid ${typeColors[pr.innerType].bgColor}` : 'none'};
  border-radius: ${(pr) => (pr.isSearch ? '0px 8px 8px 0px' : '8px')};
  outline: none;
  cursor: pointer;
  width: auto;
  padding: 0 ${(pr) => sidePaddings[pr.size]}px;
  margin-right: 3px;
  height: ${(pr) => heights[pr.size]}px;
  background-color: ${(pr) =>
    pr.outline ? `#ffff` : typeColors[pr.innerType].bgColor};
  color: ${(pr) =>
    pr.outline
      ? typeColors[pr.innerType].bgColor
      : typeColors[pr.innerType].color};

  transition: background 300ms ease-in-out, color 300ms ease-in-out;

  &:hover:enabled {
    background-color: ${(pr) => typeColors[pr.innerType].hover};
    color: ${(pr) => typeColors[pr.innerType].color};
  }
  &:focus {
    outline: none;
  }
  & > *:nth-child(1) {
    margin-left: ${(pr) => (pr.withText ? 7 : 5)}px;
  }
  ${(pr) =>
    pr.disabled
      ? `
        opacity: 0.6;
        cursor: not-allowed;
        `
      : ''}
`;

export const StyledIcon = styled.div`
  height: 20px;
`;
