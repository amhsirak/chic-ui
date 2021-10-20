import styled from 'styled-components';


export const ToastElement = styled.div`
  background: #fff;
  transition: 0.3s ease;
  position: relative;
  pointer-events: auto;
  overflow: hidden;
  margin: 0 0 6px;
  padding: 30px;
  margin-bottom: 15px;
  width: 300px;
  max-height: 100px;
  border-radius: 3px 3px 3px 3px;
  box-shadow: 0 0 10px #999;
  color: #fff;
  opacity: 0.9;
  background-position: 15px;
  background-repeat: no-repeat;
  min-height: 50px;
  width: 365px;
  padding: 20px 15px 10px 10px;
  &:hover {
    box-shadow: 0 0 12px #fff;
    opacity: 1;
    cursor: pointer;
  }
  button {
    position: relative;
    right: -0.3em;
    top: -0.3em;
    float: right;
    font-weight: 700;
    color: #fff;
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
  font-size: 16px;
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
export const ToastImage = styled.div`
  float: left;
  margin-right: 15px;
  height: 100%;
  img {
    width: 30px;
    height: 30px;
  }
`;