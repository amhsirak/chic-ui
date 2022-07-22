import Field from '../field';
import { StyledCheckbox, StyledLabelCheckbox } from '../styled';

export interface CheckboxProps {
  label: string;
  value: string | number;
  name: string;
  id: string;
};

const Checkbox = ({ label, id, ...restProps }: CheckboxProps) => {
  return (
    <Field {...restProps}>
      {({ input }: any) => {
        return (
          <div style={{ marginBottom: '15px' }}>
            <StyledCheckbox id={id} {...input} />
            <StyledLabelCheckbox htmlFor={id}>{label}</StyledLabelCheckbox>
          </div>
        );
      }}
    </Field>
  );
};

export default Checkbox;
