import styled from 'styled-components';
import { Placement } from './drawer';

interface StyledDrawerWrapperProps {
  open: boolean;
}

interface StyledDrawerContainerProps {
  height: string;
  width: string;
  placement: Placement;
  open: boolean;
}

export const StyledDrawerWrapper = styled.div<StyledDrawerWrapperProps>`
  position: fixed;
  inset: 0;
  z-index: 1000;
  pointer-events: ${({ open }) => (open ? 'auto' : 'none')};
  background: ${({ open }) => (open ? ' rgba(0,0,0,.25)' : 'transparent')};
  transition: background 500ms ease-in-out;
`;

export const StyledDrawerContainer = styled.div<StyledDrawerContainerProps>`
  position: absolute;
  width: ${({ width }) => `min(${width},100%)`};
  height: ${({ height }) => `min(${height},100%)`};
  background: #fff;
  right: ${({ placement, open }) =>
    placement === 'right' ? (open ? 0 : '-999px') : ''};
  left: ${({ placement, open }) =>
    placement === 'left' ? (open ? 0 : '-999px') : ''};
  top: ${({ placement, open }) =>
    placement === 'top' ? (open ? 0 : '-999px') : ''};
  bottom: ${({ placement, open }) =>
    placement === 'bottom' ? (open ? 0 : '-999px') : ''};
  display: flex;
  flex-direction: column;
  transition: inset 500ms ease-in-out;
  box-shadow: 0px 6px 24px rgba(0, 0, 0, 0.1);
`;

export const StyledDrawerHeader = styled.div`
  display: flex;
  align-items: center;
  padding: 16px 24px;
  line-height: 22px;
  border-bottom: 1px solid rgba(0, 0, 0, 0.06);
  gap: 8px;
`;

export const StyledDrawerClose = styled.button`
  background: none;
  border: none;
  cursor: pointer;
  line-height: 0;
  transition: filter 300ms;
  svg {
    height: 12px;
    width: 12px;
  }
  :hover,
  :focus {
    filter: drop-shadow(0.5px 0.5px 0.5px black);
  }
`;

export const StyledDrawerBody = styled.div`
  flex: 1;
  padding: 16px 24px;
`;

export const StyledDrawerFooter = styled.div`
  padding: 16px 24px;
  border-top: 1px solid rgba(0, 0, 0, 0.06);
`;
