import styled from 'styled-components';
import { StyledCardProps } from '.';
import { theme as typeColors } from '../../tokens/themes';

export const StyledCard = styled.div`
  display: flex;
  padding: 0.5rem;
  margin-bottom: 0.5rem;
  width: 100%;
  @media (min-width: 40rem) {
    width: 50%;
  }
  @media (min-width: 56rem) {
    width: 33.3%;
  }
`;

export const StyledCardItem = styled.div<StyledCardProps>`
  display: flex;
  flex-direction: column;
  overflow: hidden;
  border-radius: 8px;
  color: ${(pr) => (pr.type ? typeColors[pr.type].color : '#00000')};
  text-decoration: none;
  font-size: 15px;
  background-color: ${(pr) => pr.type && typeColors[pr.type].hover};
  width: 100%;
`;

export const StyledImage = styled.img`
  max-width: 100%;
  height: 200px;
  overflow: hidden;
  background-size: cover;
`;

export const StyledTitle = styled.h2`
  font-weight: 800;
  margin: auto 17px;
  margin-top: 1rem;
`;

export const StyledSubTitle = styled.h5`
  margin: auto 17px;
  margin-top: 0.5rem;
`;

export const StyledDescription = styled.p`
  display: flex;
  flex: 1 1 auto;
  flex-direction: column;
  margin: auto 17px;
  margin-top: 0.5rem;
`;

export const StyledFooter = styled.div<StyledCardProps>`
  color: ${(pr) => (pr.type ? typeColors[pr.type].color : '#00000')};
  text-align: center;
  display: flexbox;
  justify-content: space-between;
  padding: 20px 20px;
`;

export const StyledFooterText = styled.p`
  text-align: left;
  margin: auto 0px;
  font-size: 14px;
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
