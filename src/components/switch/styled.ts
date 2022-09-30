import styled from 'styled-components';
import {
  ComponentSize,
  heights,
  switchPaddingNumbers
} from '../../tokens/sizes';
import { themeType, theme as typeColors } from '../../tokens/themes';

interface SwitchWrapperProps {
  type: themeType;
  size: ComponentSize;
  checked: boolean;
  disabled: boolean;
  padding: ComponentSize;
}

function getBackgroundColor(
  pr: Pick<SwitchWrapperProps, 'disabled' | 'checked' | 'type'>
): string {
  if (pr.disabled) {
    return typeColors['light'].bgColor;
  }
  if (!pr.checked) {
    return typeColors['light'].hover;
  }
  return typeColors[pr.type].bgColor;
}

export const SwitchWrapper = styled.div<SwitchWrapperProps>`
  background-color: ${getBackgroundColor};
  padding: ${(pr) => switchPaddingNumbers[pr.padding]}px;
  height: ${(pr) => heights[pr.size]}px;
  width: ${(pr) => heights[pr.size] * 2}px;
  border-radius: ${(pr) => heights[pr.size] / 2}px;
  cursor: ${(pr) => (pr.disabled ? 'default' : 'pointer')};
  transition: all 250ms ease-in-out;
`;

SwitchWrapper.displayName = 'SwitchWrapper';

interface SwitchToggleProps {
  type: themeType;
  size: ComponentSize;
  checked: boolean;
  padding: ComponentSize;
  disabled: boolean;
}

export const SwitchToggle = styled.div<SwitchToggleProps>`
  aspect-ratio: 1;
  width: ${(pr) => heights[pr.size] - switchPaddingNumbers[pr.padding] * 2}px;
  height: ${(pr) => heights[pr.size] - switchPaddingNumbers[pr.padding] * 2}px;
  background-color: ${(pr) => (pr.disabled ? '#c0c0c0' : '#fff')};
  transition: all 250ms ease-in-out;
  transform: translateX(${(pr) => (pr.checked ? heights[pr.size] : 0)}px);
  border-radius: ${(pr) => heights[pr.size] / 2}px;
`;

SwitchToggle.displayName = 'SwitchToggle';
