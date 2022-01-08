import React from 'react';
import { StyledField, StyledLabel } from '../styled';

type CheckboxGroupProps = {
  name?: string;
  label?: string;
  required?: boolean;
  children: React.ReactNode;
};

const CheckboxGroup = ({
  name = 'chk_group',
  label,
  children,
  required,
  ...restProps
}: CheckboxGroupProps) => {
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
            type: 'checkbox',
            required
          })
        )}
      </div>
    </StyledField>
  );
};

export default CheckboxGroup;
