import React from 'react';
import { Config } from 'final-form';
interface FormProps<FormValues = unknown> {
    children: React.ReactNode;
    onSubmit: Config<FormValues, Partial<FormValues>>['onSubmit'];
}
declare function Form(props: FormProps): JSX.Element;
declare namespace Form {
    var Input: typeof import("./input").default;
    var Radio: ({ label, ...restProps }: import("./Radio/radio").RadioProps) => JSX.Element;
    var Checkbox: ({ label, id, ...restProps }: import("./Checkbox/checkbox").CheckboxProps) => JSX.Element;
    var RadioGroup: ({ name, label, children, required, ...restProps }: {
        name?: string | undefined;
        label?: string | undefined;
        required?: boolean | undefined;
        children: React.ReactNode;
    }) => JSX.Element;
    var SubmitButton: typeof import("./submitButton").default;
    var CheckboxGroup: ({ name, label, children, required, ...restProps }: {
        name?: string | undefined;
        label?: string | undefined;
        required?: boolean | undefined;
        children: React.ReactNode;
    }) => JSX.Element;
}
export default Form;
//# sourceMappingURL=form.d.ts.map