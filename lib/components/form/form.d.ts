import React from 'react';
import { Config } from 'final-form';
import Input from './input';
import SubmitButton from './submitButton';
interface FormProps<FormValues = unknown> {
    children: React.ReactNode;
    onSubmit: Config<FormValues, Partial<FormValues>>['onSubmit'];
}
declare const Form: {
    (props: FormProps): JSX.Element;
    Input: typeof Input;
    Radio: ({ label, ...restProps }: import("./Radio/radio").RadioProps) => JSX.Element;
    Checkbox: ({ label, id, ...restProps }: import("./Checkbox/checkbox").CheckboxProps) => JSX.Element;
    RadioGroup: ({ name, label, children, required, ...restProps }: {
        name?: string | undefined;
        label?: string | undefined;
        required?: boolean | undefined;
        children: React.ReactNode;
    }) => JSX.Element;
    SubmitButton: typeof SubmitButton;
    CheckboxGroup: ({ name, label, children, required, ...restProps }: {
        name?: string | undefined;
        label?: string | undefined;
        required?: boolean | undefined;
        children: React.ReactNode;
    }) => JSX.Element;
};
export default Form;
//# sourceMappingURL=form.d.ts.map