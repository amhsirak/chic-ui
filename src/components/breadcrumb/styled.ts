import styled from 'styled-components';
import { themeType, theme as typeColors  } from '../../tokens/themes';

interface StyledBreadcrumbProps {
  themeColor: themeType
}

export const StyledBreadcrumb = styled.ol<StyledBreadcrumbProps>`
  list-style: none;
  display: flex;
  align-items: center;
  display: flex;
  flex-direction: row;

  .breadcrumb-separator {
    align-items: center;
    color: ${({ themeColor }) => typeColors[themeColor].bgColor};
    display: flex;
    margin: auto 6px;
    user-select: none;
  }

  .breadcrumb-item {
    color: ${({ themeColor }) => typeColors[themeColor].bgColor};
  }

  .breadcrumb-item:hover {
    color: ${({ themeColor }) => typeColors[themeColor].hover};
  }

  a { 
    color: inherit;
  }
`;
