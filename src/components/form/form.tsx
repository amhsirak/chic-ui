import React from 'react';
import { Config } from 'final-form';
import { Form as FinalForm } from 'react-final-form';
import Input from './input';
import Checkbox from './Checkbox/checkbox';
import Radio from './Radio/radio';
import SubmitButton from './submitButton';
import RadioGroup from './Radio/radioGroup';
import CheckboxGroup from './Checkbox/checkboxGroup';

interface FormProps<FormValues = unknown> {
  children: React.ReactNode;
  onSubmit: Config<FormValues, Partial<FormValues>>['onSubmit'];
};

const Form = (props: FormProps): JSX.Element => {
  const { onSubmit, children, ...restProps } = props;

  return (
    <FinalForm onSubmit={onSubmit}>
      {(props) => (
        <form {...restProps} onSubmit={props.handleSubmit} autoComplete="off">
          {children}
        </form>
      )}
    </FinalForm>
  );
}

Form.Input = Input;
Form.Radio = Radio;
Form.Checkbox = Checkbox;
Form.RadioGroup = RadioGroup;
Form.SubmitButton = SubmitButton;
Form.CheckboxGroup = CheckboxGroup;

export default Form;
