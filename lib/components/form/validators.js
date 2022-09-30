import validator from 'validator';
export var composeValidators = function () {
    var validators = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        validators[_i] = arguments[_i];
    }
    return function (value, allValues) {
        return validators.reduce(function (error, validator) { return error || validator(value, allValues); }, undefined);
    };
};
export var isRequired = function (value) {
    var trimmedValue = typeof value === 'string' ? value === null || value === void 0 ? void 0 : value.trim() : value;
    if (!trimmedValue && trimmedValue !== 0) {
        return 'Please complete this field.';
    }
    return undefined;
};
export var isEmail = function (message) { return function (value) {
    if (validator.isEmail(value)) {
        return undefined;
    }
    else {
        return message;
    }
}; };
export var isStrongPassword = function (message) { return function (value) {
    var options = {
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
    }
    else {
        return message;
    }
}; };
//# sourceMappingURL=validators.js.map