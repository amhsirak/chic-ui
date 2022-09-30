export declare const composeValidators: (...validators: any[]) => (value: any, allValues: any) => any;
export declare const isRequired: (value: any) => "Please complete this field." | undefined;
export declare const isEmail: (message: string) => (value: string) => string | undefined;
export declare const isStrongPassword: (message: string) => (value: string) => string | undefined;
//# sourceMappingURL=validators.d.ts.map