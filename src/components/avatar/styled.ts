import styled, { css } from 'styled-components';
import { theme as typeColors } from '../../tokens/themes';

interface StyledAvatarProps {
  src?: string;
  className?: string;
  name?: string;
  hasBadge?: boolean;
  isActive?: boolean;
  width?: number;
  height?: number;
}

export const StyledAvatar = styled.span<StyledAvatarProps>`
  display: block;
  position: relative;
  width: ${(pr) => pr.width}px;
  height: ${(pr) => pr.height}px;
  padding: 1px;
  border-radius: 50%;
  color: ${typeColors.light.color};
  ${(pr) => pr.isActive && isActiveProp};
`;

const isActiveProp = css`
  &::before {
    content: '';
    display: block;
    position: absolute;
    z-index: -1;
    top: -4px;
    left: -4px;
    width: calc(100% + 8px);
    height: calc(100% + 8px);
    border-radius: 50%;
    background: linear-gradient(
      90deg,
      rgba(3, 70, 75, 1) 0%,
      rgba(69, 181, 46, 1) 35%,
      rgba(21, 227, 145, 1) 100%
    );
  }
`;

const commonStyles = css`
  position: relative;
  width: 100%;
  height: 100%;
  border-radius: 50%;
  background: #eee;
  color: ${typeColors.light.color};
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
  color: ${typeColors.light.color};
  ${commonStyles};
`;
