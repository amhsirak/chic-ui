import { jsx as _jsx, Fragment as _Fragment, jsxs as _jsxs } from "react/jsx-runtime";
import TextInput from '..';
import { render } from '../../../test/utils';
/* eslint-disable */
describe('TextInput Component', function () {
    it('Renders Correctly', function () {
        var TextInputGroup = render(_jsxs(_Fragment, { children: [_jsx(TextInput, { placeholder: "Type something...", size: "small" }, void 0), _jsx(TextInput, { placeholder: "Type something...", width: "200px", size: "large" }, void 0), _jsx(TextInput, { placeholder: "Error Erorrr!", width: "400px", error: true }, void 0), _jsx(TextInput, { placeholder: "Disabled Input", width: "400px", disabled: true }, void 0)] }, void 0));
        expect(TextInputGroup).toMatchSnapshot();
    });
});
//# sourceMappingURL=textinput.spec.js.map