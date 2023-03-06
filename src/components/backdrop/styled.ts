import styled from 'styled-components';
import { BackdropProps } from './backdrop';
import { theme as typeColors } from '../../tokens/themes';

export const StyledBackdrop = styled.div<BackdropProps>`
  display: ${(props) => (props.visible ? 'block' : 'none')};
  position: absolute;
  left: 0;
  top: 0;
  width: 100vw;
  height: 100vh;
  z-index: ${(props) => (props.zIndex ? props.zIndex : 101)};
  background: ${(props) =>
    props.color ? props.color : typeColors['light'].hover};
`;
