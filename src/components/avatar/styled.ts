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
    top: -7px;
    left: -7px;
    width: calc(100% + 8px);
    height: calc(100% + 8px);
    border-radius: 50%;
    border: 3px solid ${typeColors.success.bgColor};
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
