import styled from 'styled-components';
import { PaginationProps } from './pagination';
import { theme as typeColors } from '../../tokens/themes';

export const Container = styled.div``;

interface PageButtonProps extends PaginationProps {
  activePage?: number;
  buttonPage?: number;
}

export const PageButton = styled.button<PageButtonProps>`
  padding: 0.5rem 0.6rem;
  border: 1px solid rgba(0, 0, 0, 0.2);
  border-right: none;
  color: ${({ bgType, activePage, buttonPage, activeColor, customBg }) =>
    !isNaN(activePage!) && activePage === buttonPage
      ? activeColor
      : customBg
      ? customBg.color
      : typeColors[bgType!].color};
  background-color: ${({
    bgType,
    customBg,
    activePage,
    buttonPage,
    activeBg
  }) =>
    !isNaN(activePage!) && activePage === buttonPage
      ? activeBg
      : customBg
      ? customBg.bgColor
      : typeColors[bgType!].bgColor};
  &:hover {
    background-color: ${({
      bgType,
      customBg,
      activePage,
      buttonPage,
      activeBg
    }) =>
      !isNaN(activePage!) && activePage === buttonPage
        ? activeBg
        : customBg
        ? customBg.hover
        : typeColors[customBg ?? bgType!].hover};

    color: ${({ activeHoverColor, activePage, buttonPage, customBg, bgType }) =>
      activeHoverColor && !isNaN(activePage!) && activePage === buttonPage
        ? activeHoverColor
        : customBg
        ? customBg.color
        : typeColors[bgType!].color};
  }
`;

export const PreviousButton = styled(PageButton)`
  border-top-left-radius: 4px;
  border-bottom-left-radius: 4px;
  border-right: none;
`;

export const NextButton = styled(PageButton)`
  border-top-right-radius: 4px;
  border-bottom-right-radius: 4px;
  border-right: 1px solid rgba(0, 0, 0, 0.2);
`;
