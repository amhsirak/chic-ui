import styled from 'styled-components';
import { BackdropProps } from './backdrop';

export const StyledBackdrop = styled.div<BackdropProps>`
  ${(props) =>
    props.visible
      ? `
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    `
      : 'display: none;'}
  position: absolute;
  left: 0;
  top: 0;
  width: 100vw;
  height: 100vh;
  z-index: ${(props) => (props.zIndex ? props.zIndex : 101)};
  background-color: ${(props) =>
    props.color ? props.color : 'rgba(0,0,0,.5)'};
`;
