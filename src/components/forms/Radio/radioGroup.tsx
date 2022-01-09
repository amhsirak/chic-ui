import React from 'react';
import { StyledField, StyledLabel } from '../styled';

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
    </StyledField>
  );
};

export default RadioGroup;
