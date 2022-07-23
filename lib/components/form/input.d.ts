/// <reference types="react" />
declare type InputProps = {
    placeholder?: string;
    rows?: string | number;
    label: string;
    required?: boolean;
    name?: string;
    type?: string;
    validate?: any[];
};
declare function Input({ placeholder, rows, type, ...restProps }: InputProps): JSX.Element;
export default Input;
//# sourceMappingURL=input.d.ts.map