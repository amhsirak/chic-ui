import styled from 'styled-components';
import { StyledCardProps } from '.';
import { theme as typeColors } from '../../config/themes';

export const StyledCard = styled.div<StyledCardProps>`
  display: inline-block;
  box-sizing: border-box;
  color: ${pr => pr.type ? typeColors[pr.type].color : '#00000'};
  text-decoration: none;
  padding-bottom: 40px;
  font-size: 15px;
  background-color: ${pr => pr.type ? typeColors[pr.type].regular : '#ffff'};
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

export const StyledTitle = styled.h2`
  margin: auto 17px;
  margin-top: 1rem;
`;

export const StyledSubTitle = styled.h4`
  margin: auto 17px;
  margin-top: 0.5rem;
`;

export const StyledDescription = styled.p`
  margin: auto 17px;
  margin-top: 0.5rem;
`;

export const StyledFooter = styled.div<StyledCardProps>`
  color: ${pr => pr.type ? typeColors[pr.type].color : '#00000'};
  text-align: center;
  display: flexbox;
  justify-content: space-between;
  padding: 20px 20px;
`;

export const StyledFooterText = styled.p`
  text-align: left;
  margin: auto 0px;
`;

export const StyledFooterLink = styled.a<StyledCardProps>`
  color: #d193fa;
  cursor: pointer;
  text-decoration: none;
  &:active,
  &:visited {
    color: #9357ba;
    text-decoration: none;
  }
  &:focus,
  &:hover {
    color: #6874cc;
  }
`;

