import React from 'react';
import { useField } from 'react-final-form';
import { Error, StyledField, StyledLabel } from '../styled';

type RadioGroupProps = {
  name?: string;
  label?: string;
  required?: boolean;
  children: React.ReactNode;
};

const RadioGroup = ({
  name = '',
  label,
  children,
  required,
  ...restProps
}: RadioGroupProps) => {
  const { meta } = useField(name);

  return (
    <StyledField {...restProps}>
      {!!label && (
        <StyledLabel htmlFor={name}>
          {label}
          {!required && ' (Optional)'}
        </StyledLabel>
      )}
      <div style={{ position: 'relative' }}>
        {React.Children.map(children, (child: any) =>
          React.cloneElement(child, {
            ...child.props,
            name,
            type: 'radio',
            required
          })
        )}
      </div>
      {meta.error && meta.touched && <Error>{meta.error}</Error>}
    </StyledField>
  );
};

export default RadioGroup;
