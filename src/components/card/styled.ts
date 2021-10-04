import styled from 'styled-components';
import { StyledCardProps } from '.';

export const StyledCard = styled.a<StyledCardProps>`
  display: inline-block;
  box-sizing: border-box;
  color: #0018cf;
  cursor: pointer;
  text-decoration: none;
  margin: 0;
  padding: 0;
  font-size: 15px;
  &:active,
  &:visited {
    color: #0018cf;
    text-decoration: none;
  }
  &:focus,
  &:hover {
    color: #6874cc;
  }
`;
