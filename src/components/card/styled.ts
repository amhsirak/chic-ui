import styled from 'styled-components';
import { StyledCardProps } from '.';

export const StyledCard = styled.div<StyledCardProps>`
  display: inline-block;
  box-sizing: border-box;
  color: black;
  text-decoration: none;
  padding-bottom: 40px;
  font-size: 15px;
  height: ${(pr) => pr.height};
  width: ${(pr) => pr.width};
  -webkit-box-shadow: 5px 5px 15px 5px #ADADAD; 
  box-shadow: 5px 5px 15px 5px #ADADAD;
`;

export const StyledImage = styled.img`
  height: 60%;
  width: 100%;
  object-fit: cover;
`;

export const StyledHeader = styled.h3`
  margin: auto 10px;
`;

export const StyledDescription = styled.p`
  margin: auto 10px;
`;

export const StyledFooter = styled.div`
  color: grey;
  text-align: center;
  display: flexbox;
  justify-content: space-between;
  padding: 20px 20px;
`;

export const StyledFooterText = styled.p`
  text-align:left;
`;

export const StyledFooterLink = styled.a`
  color: #0018cf;
  cursor: pointer;
  text-decoration: none;
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

