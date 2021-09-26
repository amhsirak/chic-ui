import styled, {css} from 'styled-components';

interface StyledAvatarProps {
    src: string;
    className?: string;
    width?: string;
    height?: string;
    name?: string;
    hasBadge?: boolean;
    isActive?: boolean;
}

const StyledAvatar = styled.span<StyledAvatarProps>`
    display: block;
    position: relative;
    width: ${pr => pr.width}px;
    height: ${pr => pr.height}px;
    padding: 5px;
    border-radius: 50%;
`;