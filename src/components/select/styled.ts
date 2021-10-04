import styled from 'styled-components';
import { ComponentSize, heights } from '../../config/sizes';

interface SelectWrapperProps {
  width: string;
}

export const SelectWrapper = styled.div<SelectWrapperProps>`
  width: ${(pr) => pr.width};
  display: flex;
  flex-direction: column;
`;

export const SelectOption = styled.li`
  list-style: none;
  border-radius: 2px;
  border: 1px solid black;
  padding: 8px;
  &:hover {
    background-color: rgba(144, 202, 249, 0.6);
  }
`;

interface StyledSelectDivProps {
  error: boolean;
  innerSize: ComponentSize;
  disabled: boolean;
}

export const StyledSelectDiv = styled.div<StyledSelectDivProps>`
  width: 100%;
  padding: 8px;
  border-radius: 2px;
  box-shadow: inset 0 0 0 2px ${(pr) => (pr.error ? '#d93848' : 'transparent')};
  background-color: ${(pr) => (pr.error ? 'ffe3e6' : '#EEEEEE')};
  height: ${(pr) => heights[pr.innerSize]}px;
  &:focus {
    box-shadow: inset 0 0 0 2px ${(pr) => (pr.error ? '#d93848' : '#000')};
  }
`;

export const SelectOptionWrapper = styled.div`
  background-color: rgba(144, 202, 249, 0.16);
  max-height: 240px;
  &:hover {
    cursor: pointer;
  }
`;
