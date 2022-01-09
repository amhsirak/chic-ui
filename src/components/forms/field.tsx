import { useField } from 'react-final-form';
import { Error, StyledField, StyledLabel } from './styled';
import { composeValidators, isRequired } from './validators';

type FieldProps = {
  name?: string | undefined;
  label?: string;
  required?: boolean;
  children?: any;
  type?: string;
  validate?: any;
};

function Field({
  name = '',
  type,
  label,
  required,
  validate = [],
  children,
  ...restProps
}: FieldProps) {
  const { input, meta } = useField(name, {
    ...restProps,
    type,
    validate: required
      ? composeValidators(isRequired, ...validate)
      : composeValidators(...validate)
  });

  if (type === 'radio' || type === 'checkbox') {
    return (
      <StyledField>
        {children({ input, meta })}
        {meta.error && <Error>{meta.error}</Error>}
      </StyledField>
    );
  }

  return (
    <StyledField>
      {!!label && (
        <StyledLabel htmlFor={name}>
          {label}
          {!required && ' (Optional)'}
        </StyledLabel>
      )}
      {children({ input, meta })}
      {meta.error && meta.touched && <Error>{meta.error}</Error>}
    </StyledField>
  );
}

export default Field;
