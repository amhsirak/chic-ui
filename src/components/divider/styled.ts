import styled from 'styled-components';
import { theme as typeColors } from 'config/themes';
import { DividerProps } from './divider';

export const StyledDivider = styled.hr<DividerProps>`
  border-width: ${(pr) => pr.thickness}px;
  border-style: ${(pr) => (pr.dashed ? `dashed` : `solid`)};
  border-color: ${(pr) => typeColors[pr.type!].bgColor};
  width: 100%;
  margin-left: auto;
  margin-right: auto;
`;
