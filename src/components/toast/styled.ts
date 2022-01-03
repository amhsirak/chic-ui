import styled from 'styled-components';
import { ToastProps } from './toast';
import { theme as typeColors } from 'config/themes';

export const ToastElement = styled.div<ToastProps>`
  background-color: ${(pr) => typeColors[pr.type!].bgColor};
  color: ${(pr) => typeColors[pr.type!].color};
  transition: 0.3s ease;
  position: relative;
  pointer-events: auto;
  overflow: hidden;
  margin: 0 0 6px;
  padding: 30px;
  margin-bottom: 15px;
  max-height: 100px;
  border-radius: 8px;
  opacity: 0.9;
  background-position: 15px;
  background-repeat: no-repeat;
  min-height: 50px;
  max-width: 380px;
  padding: 20px 15px 10px 10px;
  &:hover {
    // box-shadow: 0 0 3px #fff;
    opacity: 1;
    cursor: pointer;
  }
  button {
    position: relative;
    right: -0.3em;
    top: -0.3em;
    float: right;
    font-weight: 700;
    color: ${(pr) => typeColors[pr.type!].color};
    outline: none;
    border: none;
    text-shadow: 0 1px 0 #fff;
    opacity: 0.8;
    line-height: 1;
    font-size: 16px;
    padding: 0;
    cursor: pointer;
    background: 0 0;
    border: 0;
  }
`;

export const ToastTitle = styled.p`
  font-weight: 700;
  font-size: 15px;
  text-align: left;
  margin-top: 0;
  margin-bottom: 6px;
  width: 300px;
  height: 18px;
`;
export const ToastMessage = styled.p`
  margin: 0;
  text-align: left;
  height: 18px;
  margin-left: -1px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`;
export const ToastIcon = styled.div`
  float: left;
  margin-right: 15px;
  margin-top: 5px;
  width: 25px;
  height: 25px;
`;
