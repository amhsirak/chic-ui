import styled from 'styled-components';

interface SearchWrapperProps {
  width: string;
}

export const SearchWrapper = styled.div<SearchWrapperProps>`
  display: flex;
  max-width: ${(pr) => pr.width};
`;
