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
  bordered: boolean;
}

export const StyledTextInput = styled.input<StyledTextInputProps>`
  box-sizing: border-box;
  font: inherit;
  font-size: 14px;
  line-height: 1.4;
  position: relative;
  color: #000;
  border: 1px solid ${(pr) => (pr.error ? '#ff4d4f' : '#d9d9d9')};
  border-radius: ${(pr) => (pr.bordered ? '6px' : '0px')};
  outline: none;
  transition: all 0.2s;
  padding: 0px 11px;
  margin: 0;
  display: inline-block;
  height: ${(pr) => heights[pr.innerSize]}px;
  width: 100%;
  min-width: 0;
  background-color: #fff;
  background-image: none;

  &:focus {
    outline: 0;
    border-color: ${(pr) => (pr.error ? '#ff4d4f' : '#4096ff')};
    border-inline-end-width: 1px;
    box-shadow: 0 0 0 2px
      ${(pr) => (pr.error ? 'rgb(255,38,5,0.06)' : 'rgb(55,68,78,0.1)')};
  }

  // Disabled
  ${(pr) =>
    pr.disabled &&
    `
        background-color: #e1e1e1;
        color: #5e5e5e;
        cursor: not-allowed;

        &:hover {
            background-color: #e1e1e1 !important;
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
  height: 10px;
`;
