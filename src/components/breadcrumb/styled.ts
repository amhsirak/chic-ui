import styled from 'styled-components';
import { theme as typeColors } from '../../tokens/themes';

export const StyledBreadcrumb = styled.ol`
  list-style: none;
  display: flex;
  align-items: center;
  display: flex;
  flex-direction: row;

  .breadcrumb-separator {
    display: flex;
    align-items: center;
    color: ${typeColors.light.color};
    margin: auto 6px;
    user-select: none;
  }
`;
