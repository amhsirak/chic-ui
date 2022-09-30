/// <reference types="react" />
declare type FieldProps = {
    name?: string | undefined;
    label?: string;
    required?: boolean;
    children?: any;
    type?: string;
    validate?: any;
};
declare function Field({ name, type, label, required, validate, children, ...restProps }: FieldProps): JSX.Element;
export default Field;
//# sourceMappingURL=field.d.ts.map