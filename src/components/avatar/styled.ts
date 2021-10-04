import styled, { css } from 'styled-components';

interface StyledAvatarProps {
  src?: string;
  className?: string;
  name?: string;
  hasBadge?: boolean;
  isActive?: boolean;
}

export const StyledAvatar = styled.span<StyledAvatarProps>`
  display: block;
  position: relative;
  width: 80px;
  height: 80px;
  padding: 5px;
  border-radius: 50%;
  ${(pr) => pr.isActive && isActiveProp};
`;

const isActiveProp = css`
  background: linear-gradient(
    90deg,
    rgba(3, 70, 75, 1) 0%,
    rgba(69, 181, 46, 1) 35%,
    rgba(21, 227, 145, 1) 100%
  );
  &::before {
    content: '';
    display: block;
    position: absolute;
    top: -2px;
    left: -2px;
    z-index: -1;
    width: calc(100% + 4px);
    height: calc(100% + 4px);
    border-radius: 50%;
  }
`;

const commonStyles = css`
  position: relative;
  width: 100%;
  height: 100%;
  border-radius: 50%;
  background: #eee;
`;

export const StyledImage = styled.img`
  ${commonStyles};
  object-fit: cover;
`;

export const StyledSpan = styled.span`
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 24px;
  font-weight: 700;
  ${commonStyles};
`;

export const StyledBadge = styled.span`
  display: block;
  position: absolute;
  z-index: 1;
  top: 3px;
  right: 9px;
  width: 17px;
  height: 17px;
  border-radius: 50%;
  background: #27c421;
`;
