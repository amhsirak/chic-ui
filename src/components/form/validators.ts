import validator from 'validator';

export const composeValidators =
  (...validators: any[]) =>
  (value: any, allValues: any) =>
    validators.reduce(
      (error, validator) => error || validator(value, allValues),
      undefined
    );

export const isRequired = (value: any) => {
  const trimmedValue = typeof value === 'string' ? value?.trim() : value;

  if (!trimmedValue && trimmedValue !== 0) {
    return 'Please complete this field.';
  }

  return undefined;
};

export const isEmail = (message: string) => (value: string) => {
  if (validator.isEmail(value)) {
    return undefined;
  } else {
    return message;
  }
};

export const isStrongPassword = (message: string) => (value: string) => {
  const options = {
    minLength: 8,
    minLowercase: 1,
    minUppercase: 1,
    minNumbers: 1,
    minSymbols: 1,
    returnScore: false
  };
  // @ts-ignore
  if (validator.isStrongPassword(value, [options])) {
    return undefined;
  } else {
    return message;
  }
};

