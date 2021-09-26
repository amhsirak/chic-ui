import styled, {css} from 'styled-components';

interface StyledAvatarProps {
    src: string;
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
    ${pr => pr.isActive && isActiveProp};
`;

const isActiveProp = css`
    background: #37c225;
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
  background: white;
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
  font-weight: 600;
  ${commonStyles};
`;

export const StyledBadge = styled.span`
  display: block;
  position: absolute;
  z-index: 1;
  top: -6px;
  right: -2px;
  width: 28px;
  height: 28px;
  border-radius: 50%;
  border: 4px solid #262526;
  background: #21fc6b;
`;