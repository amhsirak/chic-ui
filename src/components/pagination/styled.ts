import styled from 'styled-components';
import { bgType, PaginationProps } from './pagination';

type StateColors = {
  regular: string;
  hover: string;
  color: string;
};

const typeColors: {
  [key in bgType]: StateColors;
} = {
  default: {
    regular: '#0018cf',
    hover: '#001be8',
    color: 'white',
  },
  secondary: {
    regular: '#000',
    hover: '#212121',
    color: 'white',
  },
  danger: {
    regular: '#d93848',
    hover: '#eb4d5d',
    color: 'white',
  },
  warning: {
    regular: '#de9b00',
    hover: '#eba607',
    color: 'white',
  },
  success: {
    regular: '#039e2f',
    hover: '#03a832',
    color: 'white',
  },
  light: {
    regular: '#faf7f7',
    hover: '#f7f5f5',
    color: 'black',
  },
};

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
      : typeColors[bgType].color};
  background-color: ${({
    bgType,
    customBg,
    activePage,
    buttonPage,
    activeBg,
  }) =>
    !isNaN(activePage!) && activePage === buttonPage
      ? activeBg
      : customBg
      ? customBg.regular
      : typeColors[bgType].regular};
  &:hover {
    background-color: ${({
      bgType,
      customBg,
      activePage,
      buttonPage,
      activeBg,
    }) =>
      !isNaN(activePage!) && activePage === buttonPage
        ? activeBg
        : customBg
        ? customBg.hover
        : typeColors[customBg ?? bgType].hover};

    color: ${({ activeHoverColor, activePage, buttonPage, customBg, bgType }) =>
      activeHoverColor && !isNaN(activePage!) && activePage === buttonPage
        ? activeHoverColor
        : customBg
        ? customBg.color
        : typeColors[bgType].color};
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
