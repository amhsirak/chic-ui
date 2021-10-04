import styled from 'styled-components';

interface SearchWrapperProps {
  width: string;
}

export const SearchWrapper = styled.div<SearchWrapperProps>`
  width: ${(pr) => pr.width};
  display: flex;
`;
