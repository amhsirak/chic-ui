import styled from 'styled-components';

type StyledInputProps = {
  rows?: number;
  hasIcon?: boolean;
  hasError?: boolean;
};

export const Error = styled.div`
  font-size: 0.8rem;
  color: #ff3c33;
  margin-top: 0.5rem;
`;

export const StyledField = styled.div`
  margin-bottom: 20px;
`;

export const StyledLabel = styled.label`
  display: block;
  font-size: 13px;
  font-weight: normal;
  margin-bottom: 8px;
`;

export const StyledInput = styled.input<StyledInputProps>`
  display: block;
  width: 100%;
  border-radius: 0.25rem;
  border: 1px solid #d2d2d2;
  font-size: 14px;
  color: #66686e;
  ${({ rows }) =>
    rows
      ? `
    height: auto;
    padding: 0.5rem 1rem;
    resize: none;
    `
      : `
    height: 2.5rem;
    padding: 0 1rem;
    resize: none;
  `}
  ${({ hasIcon }) => (hasIcon ? 'padding-left: 3rem;' : '')}
  ${({ hasError }) => (hasError ? `border-color: #FF3C33;` : '')}

  ::placeholder {
    color: #66686e;
  }
  :focus {
    border-color: #007bff;
    outline: none;
  }
`;

export const StyledLabelRadio = styled.label`
  display: inline-flex;
  align-items: center;
  font-size: 13px;
  color: gray;
  :not(:last-child) {
    margin-right: 1.5rem;
  }
`;

export const StyledRadio = styled.input<StyledInputProps>`
  visibility: hidden;
  width: 0;
  height: 0;
  ~ span {
    display: flex;
    width: 1.25rem;
    height: 1.25rem;
    border: 1.5px ${({ hasError }) => (hasError ? 'red' : '#66686E')} solid;
    margin: 0.125rem 0.625rem 0.125rem 0.125rem;
    border-radius: 50%;
    align-items: center;
    justify-content: center;
  }
  :checked ~ span:before {
    content: '';
    display: block;
    width: 0.75rem;
    height: 0.75rem;
    position: absolute;
    border-radius: 50%;
    background-color: #007bff;
  }
`;

export const StyledLabelCheckbox = styled.label`
  padding-left: 35px;
  position: relative;
  font-size: 13px;
  cursor: pointer;
  ::before {
    content: '';
    position: absolute;
    left: 0;
    top: 50%;
    transform: translatey(-50%);
    width: 20px;
    height: 20px;
    background-color: #fff;
    border: 1px solid #d2d2d2;
    border-radius: 4px;
  }
  ::after {
    content: '';
    position: absolute;
    left: 5px;
    top: 4px;
    width: 11px;
    height: 4px;
    transform: rotate(-45deg);
    border-left: 3px solid #007bff;
    border-bottom: 3px solid #007bff;
    opacity: 0;
    visibility: hidden;
    transition: 0.25s linear;
  }
`;

export const StyledCheckbox = styled.input`
  display: none;
  :checked + ${StyledLabelCheckbox}::after {
    opacity: 1;
    visibility: visible;
  }
`;
