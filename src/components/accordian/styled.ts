import styled from 'styled-components';
import { AccordianProps } from '.';

export const StyledAccordian = styled.div``;

export const StyledHeader = styled.h4`
  border: 1px solid rgb(222, 226, 230);
  border-radius: 10px;
  display: flex;
  align-items: center;
  background-color: rgb(248, 249, 250);
  transition: background-color 200ms ease;
  color: rgb(52, 58, 64);
  &.open {
    border-bottom-left-radius: 0;
    border-bottom-right-radius: 0;
  }
  .accordian-toggle-button {
    display: flex;
    align-items: center;
    padding: 18px 20px;
    span {
      border: solid rgb(52, 58, 64);
      border-width: 0 2px 2px 0;
      display: inline-block;
      padding: 4px;
      rotate: -45deg;
    }
    &.open {
      span {
        transform: translateY(-2px);
        rotate: 45deg;
      }
    }
  }

  :hover {
    cursor: pointer;
    background-color: rgb(233, 236, 239);
  }
`;

export const StyledDescriptionWrapper = styled.div`
  overflow: hidden;
`;

export const StyledDescription = styled.div`
  transition: transform 200ms ease;
  &.open,
  &.close {
    padding: 12px;
    border: 1px solid rgb(222, 226, 230);
    border-bottom-left-radius: 10px;
    border-bottom-right-radius: 10px;
  }

  &.close {
    transform: translateY(-100%);
  }
`;
