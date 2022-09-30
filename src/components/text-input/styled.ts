import styled from 'styled-components';
import { ComponentSize, heights, sidePaddings } from '../../tokens/sizes';
import CrossIcon from '../../icons/Cross';

interface StyledWrapperProps {
  width: string;
  innerSize: ComponentSize;
}

export const StyledWrapper = styled.div<StyledWrapperProps>`
  position: relative;
  height: ${(pr) => heights[pr.innerSize]}px;
  max-width: ${(pr) => pr.width};
`;

interface StyledTextInputProps {
  innerSize: ComponentSize;
  disabled: boolean;
  error: boolean;
  width: string;
  withIcon: boolean;
  withCross: boolean;
  isSearch: boolean;
}

export const StyledTextInput = styled.input<StyledTextInputProps>`
  box-sizing: border-box;
  position: relative;
  color: #000;
  border: none;
  border-radius: ${(pr) => (pr.isSearch ? '8px 0px 0px 8px' : '8px')};
  outline: none;
  transition: 0.1s ease-out;
  padding: 0;
  padding-left: ${(pr) =>
    sidePaddings[pr.innerSize] +
    (pr.withIcon ? sidePaddings[pr.innerSize] + 10 /* icon */ : 0)}px;
  padding-right: ${(pr) =>
    sidePaddings[pr.innerSize] +
    (pr.withIcon ? sidePaddings[pr.innerSize] : 0)}px;
  height: ${(pr) => heights[pr.innerSize]}px;
  width: 100%;
  box-shadow: inset 0 0 0 2px ${(pr) => (pr.error ? '#d93848' : 'transparent')};
  background-color: ${(pr) => (pr.error ? 'ffe3e6' : '#EEEEEE')};
  &:focus {
    box-shadow: inset 0 0 0 2px ${(pr) => (pr.error ? '#d93848' : '#000')};
  }

  // Disabled
  ${(pr) =>
    pr.disabled &&
    `
        background-color: #a6a6a6;
        color: #5e5e5e;
        cursor: not-allowed;
        
        &:hover {
            background-color: #a6a6a6 !important;
            color: #5e5e5e !important;
        }
    `}
`;

interface StyledIconProps {
  innerSize: ComponentSize;
}

export const StyledIcon = styled.div.withConfig({
  shouldForwardProp: (prop, defPropValFN) =>
    !['innerSize'].includes(prop) && defPropValFN(prop)
})<StyledIconProps>`
  box-sizing: border-box;
  position: absolute;
  left: ${(pr) => sidePaddings[pr.innerSize]}px;
  top: 50%;
  transform: translateY(-50%);
  cursor: pointer;
  height: 15px;
`;

interface StyledCrossProps {
  innerSize: ComponentSize;
}

export const StyledCross = styled(CrossIcon)<StyledCrossProps>`
  box-sizing: border-box;
  position: absolute;
  right: ${(pr) => sidePaddings[pr.innerSize]}px;
  top: 50%;
  transform: translateY(-50%);
  cursor: pointer;
  height: 15px;
`;
