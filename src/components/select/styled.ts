import styled from 'styled-components';
import { ComponentSize, heights } from '../../tokens/sizes';
import SvgArrowDown from '../../icons/ArrowDown';
import Cross from '../../icons/Cross';

interface SelectWrapperProps {
  width: string;
}

export const SelectWrapper = styled.div<SelectWrapperProps>`
  position: relative;
  width: ${(pr) => pr.width};
  display: flex;
  flex-direction: column;
`;

interface SelectOptionProps {
  selected?: boolean;
}

export const SelectOption = styled.li<SelectOptionProps>`
  list-style: none;
  border-radius: 2px;
  background-color: ${(pr) =>
    pr.selected ? 'rgba(144, 202, 249, 0.6)' : '#EEEEEE'};
  padding: 8px;
  &:hover {
    background-color: #e0e0e0;
  }
`;

interface StyledSelectDivProps {
  error: boolean;
  innerSize: ComponentSize;
  disabled: boolean;
}

export const StyledSelectDiv = styled.div<StyledSelectDivProps>`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  padding: 8px;
  color: #000000;
  border-radius: 8px;
  transition: 0.1s ease-out;
  box-shadow: inset 0 0 0 2px ${(pr) => (pr.error ? '#d93848' : 'transparent')};
  background-color: ${(pr) => (pr.error ? 'ffe3e6' : '#EEEEEE')};
  height: ${(pr) => heights[pr.innerSize]}px;
  &:focus {
    box-shadow: inset 0 0 0 2px ${(pr) => (pr.error ? '#d93848' : '#000')};
  }
  //Disabled
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

export const SelectOptionWrapper = styled.ul`
  margin: 0;
  background-color: #fffff;
  width: 100%;
  &:hover {
    cursor: pointer;
  }
  padding: 0.5rem;
  max-height: 250px;
`;

export const ArrowDown = styled(SvgArrowDown)`
  box-sizing: border-box;
  height: 15px;
`;

export const StyledCross = styled(Cross)`
  box-sizing: border-box;
  padding-left: 3px;
  height: 10px;
`;

export const MultiSelectOptionWrapper = styled.span`
  padding-right: 10px;
`;
