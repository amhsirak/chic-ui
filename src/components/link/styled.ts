import styled from 'styled-components';

interface StyledLinkProps {
    disabled: boolean;
}

export const StyledLink = styled.a<StyledLinkProps>`
    display: inline-block;
    box-sizing: border-box;
    color: #0018cf;
    cursor: pointer;
    text-decoration: none;
    margin: 0;
    padding: 0;
    font-size: 15px;
    &:active, &:visited {
        color: #0018cf;
        text-decoration: none;
    }
    &:focus, &:hover {
        color: #6874cc;
    }
    ${pr => pr.disabled ? `
        cursor: not-allowed;
        &, &:focus, &:visited, &:hover {
            color: #5e5e5e;
        }
    ` : ''} 
`