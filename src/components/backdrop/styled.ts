import styled from 'styled-components';
import { BackdropProps } from './backdrop';
import { theme as typeColors } from '../../tokens/themes';

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
  background: ${(props) =>
    props.color ? props.color : typeColors['light'].hover};
`;
