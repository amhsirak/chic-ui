import styled from 'styled-components';

interface StyledImageProps {
    width: string;
    height: string;
    rounded: boolean;
    circle: boolean;
    outline: boolean;
}

export const StyledImage = styled.img<StyledImageProps>`
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
    border-radius: 8px;

    // Circle
    border-radius: 50%;

    // Outline
    background: #fff;
    padding: 1rem;
`;