import styled from "styled-components";
import { BackdropProps } from './backdrop'


export const StyledBackdrop = styled.div<BackdropProps>`
display: ${props => props.visible ? 'block' : 'none'};
position: ${props => props.relative ? 'relative' : 'fixed'};
left: 0;
top: 0;
width: 100vw;
height: 100vh;
z-index: ${props => props.zIndex ? props.zIndex : 101};
background: ${props => props.color ? props.color : '#000'};
`