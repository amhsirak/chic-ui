import Field from './field';
import { StyledInput } from './styled';

type InputProps = {
  placeholder?: string;
  rows?: string | number;
  label: string;
  required?: boolean;
  name?: string;
  type?: string;
  validate?: any[];
};

function Input({
  placeholder,
  rows,
  type = 'text',
  ...restProps
}: InputProps): JSX.Element {
  return (
    <Field {...restProps}>
      {({ input, meta }: any) => (
        <StyledInput
          as={rows ? 'textarea' : 'input'}
          rows={rows}
          hasError={meta.error && meta.touched}
          id={input.name}
          placeholder={placeholder}
          type={type}
          {...input}
        />
      )}
    </Field>
  );
}

export default Input;
