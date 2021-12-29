import styled from 'styled-components';
import { ImageProps } from '.';

export const StyledImage = styled.img<ImageProps>`
  box-sizing: border-box;
  position: relative;
  width: 100%;
  display: block;
  height: auto;
  background-image: ${(pr) => pr.src};
  border: none;
  outline: none;
  padding: 0;
  height: ${(pr) => pr.height};
  max-width: ${(pr) => pr.width};

  // Rounded
  ${(pr) => (pr.rounded && `border-radius: 8px;`)}

  // Circle
    ${(pr) => (pr.circle && `border-radius: 50%;`)}

    // Outline
    ${(pr) => (pr.outline && `background: #fff; padding: 1rem;`)}
`;
