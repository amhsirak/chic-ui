import Field from '../field';
import { StyledRadio, StyledLabelRadio } from '../styled';

export interface RadioProps {
  label: string;
  value: string;
};

const Radio = ({ label, ...restProps }: RadioProps) => (
  <Field {...restProps}>
    {({ input, meta }: any) => {
      return (
        <StyledLabelRadio>
          <StyledRadio hasError={meta.touched && meta.error} {...input} />
          <span />
          {label}
        </StyledLabelRadio>
      );
    }}
  </Field>
);
export default Radio;