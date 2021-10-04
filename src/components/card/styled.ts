import styled from 'styled-components';
import { StyledCardProps } from '.';

export const StyledCard = styled.div<StyledCardProps>`
  display: inline-block;
  box-sizing: border-box;
  color: #0018cf;
  text-decoration: none;
  margin: 0;
  padding: 0;
  font-size: 15px;
  height: ${(pr) => pr.height};
  width: ${(pr) => pr.width};
`;

export const StyledImage = styled.img`
  height: ${(pr) => pr.height};
  width: ${(pr) => pr.width};
  object-fit: cover;
`;

