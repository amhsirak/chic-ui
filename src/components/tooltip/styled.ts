import styled from 'styled-components';
import { TooltipProps } from './tooltip';

const arrowStyles = {
  top: {
    borderColor: (color: string) =>
      `transparent transparent ${color} transparent`,
    margin: '0 0 0 -6px',
    values: {
      bottom: '100%',
      left: '50%',
      right: 'unset',
      top: 'unset',
    },
  },
  bottom: {
    borderColor: (color: string) =>
      `${color} transparent transparent transparent`,
    margin: '0 0 0 -6px',
    values: {
      bottom: 'unset',
      left: '50%',
      right: 'unset',
      top: '100%',
    },
  },
  left: {
    borderColor: (color: string) =>
      `transparent ${color} transparent transparent`,
    margin: '-6px 0 0 0',
    values: {
      bottom: 'unset',
      left: 'unset',
      right: '100%',
      top: '50%',
    },
  },
  right: {
    borderColor: (color: string) =>
      `transparent transparent transparent ${color}`,
    margin: '-6px 0 0 0',
    values: {
      bottom: 'unset',
      left: '100%',
      right: 'unset',
      top: '50%',
    },
  },
};

export const StyledTooltip = styled.span<TooltipProps>`
  background-color: ${({ bg }) => bg};
  position: absolute;
  border-radius: 0.25rem;
  padding: 0.3rem;
  margin-top: 1rem;
  &::after {
    content: ' ';
    position: absolute;
    top: ${({ position }) => arrowStyles[position].values.top};
    bottom: ${({ position }) => arrowStyles[position].values.bottom};
    left: ${({ position }) => arrowStyles[position].values.left};
    right: ${({ position }) => arrowStyles[position].values.right};
    margin: ${({ position }) => arrowStyles[position].margin};
    border-width: 6px;
    border-style: solid;
    border-color: ${({ position, arrowColor }) =>
      arrowStyles[position].borderColor(arrowColor)};
  }
`;
