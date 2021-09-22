import styled from 'styled-components';

interface StyledImageProps {
    width: string;
    height: string;
    rounded: boolean;
    circle: boolean;
    outline: boolean;
}

export const StyledImage = styled.image<StyledImageProps>`
    box-sizing: border-box;
    position: relative;
    max-width: 100%; 
    display: block; 
    height: auto;
    border: none;
    outline: none;
    padding: 0;
    height: ${pr => pr.height};
    width: ${pr => pr.width};
    
    // Rounded 
    ${pr => pr.rounded ? `border-radius: 8px;` : ''}

    // Circle
    ${pr => pr.circle ? `border-radius: 50%;` : ''}

    // Outline
    ${pr => pr.outline ? `background: #fff; padding: 1rem;` : ''}
`;