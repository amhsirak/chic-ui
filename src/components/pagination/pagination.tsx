import React, { useState } from 'react';
import { themeType, ThemeValues } from '../../tokens/themes';
import { Container, NextButton, PageButton, PreviousButton } from './styled';

export interface PaginationProps {
  pages: number;
  startCountInZero?: boolean;
  whenNextPage: (page: number) => void;
  whenPreviousPage: (page: number) => void;
  whenPageChange: (page: number) => void;
  bgType?: themeType;
  customBg?: ThemeValues;
  activeBg: string;
  activeColor: string;
  activeHoverColor?: string;
}

const Pagination: React.ForwardRefRenderFunction<
  HTMLDivElement,
  PaginationProps
> = (props, ref) => {
  const {
    pages,
    startCountInZero,
    whenPreviousPage,
    whenNextPage,
    whenPageChange,
    bgType = 'primary'
  } = props;

  const [page, setPage] = useState(startCountInZero ? 0 : 1);

  const goBack = () => {
    let current = page > 0 ? page - 1 : 0;
    if (!startCountInZero && current < 1) {
      current = 1;
    }
    setPage(current);
    whenPreviousPage(current);
  };

  const goForward = () => {
    let current = page < pages ? page + 1 : pages;
    if (startCountInZero && pages - 1 === page) {
      current = pages - 1;
    }
    setPage(current);
    whenNextPage(current);
  };

  const onChange = (newPage: number) => {
    setPage(newPage);
    whenPageChange(newPage);
  };

  return (
    <Container ref={ref}>
      <PreviousButton onClick={goBack} bgType={bgType} {...props}>
        Previous
      </PreviousButton>
      {new Array(pages > 0 ? pages : 0).fill(0).map((v, i) => (
        <PageButton
          activePage={page}
          buttonPage={startCountInZero ? i : i + 1}
          key={i}
          onClick={() => onChange(i === 0 ? (startCountInZero ? i : ++i) : i)}
          bgType={bgType}
          {...props}
        >
          {startCountInZero ? i : ++i}
        </PageButton>
      ))}
      <NextButton onClick={goForward} bgType={bgType} {...props}>
        Next
      </NextButton>
    </Container>
  );
};

export default React.forwardRef<HTMLDivElement, PaginationProps>(Pagination);
