var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import Form from '..';
import { render } from '../../../test/utils';
import { isEmail, isStrongPassword } from '../validators';
var onSubmit = function (values) {
    console.log('submit form: ', values);
};
/* eslint-disable */
describe('Form Component', function () {
    it('Renders Correctly', function () {
        var FormGroup = render(_jsx(_Fragment, { children: _jsxs(Form, __assign({ onSubmit: onSubmit }, { children: [_jsx(Form.Input, { placeholder: "Enter your full name", name: "fullname", label: "Full name", required: true }, void 0), _jsx(Form.Input, { placeholder: "Enter your email", name: "email", label: "Email", required: true, validate: [isEmail('Invalid email.')] }, void 0), _jsx(Form.Input, { type: "password", placeholder: "Enter your password", name: "password", label: "Password", required: true, validate: [
                            isStrongPassword('Password must be at least 8 characters, 1 lower case characters, 1 upper case characters, 1 numbers and 1 symbols')
                        ] }, void 0), _jsxs(Form.RadioGroup, __assign({ label: "Gender", name: "gender" }, { children: [_jsx(Form.Radio, { value: "male", label: "Male" }, void 0), _jsx(Form.Radio, { value: "female", label: "Female" }, void 0)] }), void 0), _jsx(Form.Input, { label: "Description", name: "bio", placeholder: "Enter your bio", rows: 5 }, void 0), _jsxs(Form.CheckboxGroup, __assign({ label: "Internet", required: true }, { children: [_jsx(Form.Checkbox, { label: "3G", value: "3g", name: "internet", id: "3g" }, void 0), _jsx(Form.Checkbox, { label: "4G", value: "4g", name: "internet", id: "4g" }, void 0)] }), void 0), _jsx(Form.SubmitButton, { children: "Submit" }, void 0)] }), void 0) }, void 0));
        expect(FormGroup).toMatchSnapshot();
    });
});
//# sourceMappingURL=form.spec.js.map