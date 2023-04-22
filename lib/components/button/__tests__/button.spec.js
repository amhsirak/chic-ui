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
import Button from '..';
import { render } from '../../../test/utils';
import SearchIcon from '../../../icons/Search';
/* eslint-disable */
describe('Button Component', function () {
    it('Renders Correctly', function () {
        var ButtonGroup = render(_jsxs(_Fragment, { children: [_jsxs("div", { children: [_jsx(Button, __assign({ size: "large" }, { children: "Large" })), _jsx(Button, __assign({ size: "default" }, { children: "Default" })), _jsx(Button, __assign({ size: "small" }, { children: "Small" }))] }), _jsxs("div", { children: [_jsx(Button, __assign({ type: "primary" }, { children: "Primary" })), _jsx(Button, __assign({ type: "secondary" }, { children: "Secondary" })), _jsx(Button, __assign({ type: "warning" }, { children: "Warning" })), _jsx(Button, __assign({ type: "success" }, { children: "Success" })), _jsx(Button, __assign({ type: "danger" }, { children: "Danger" })), _jsx(Button, __assign({ type: "info" }, { children: "Info" })), _jsx(Button, __assign({ type: "light" }, { children: "Light" }))] }), _jsxs("div", { children: [_jsx(Button, { loading: true, type: "secondary" }), _jsx(Button, { loading: true, type: "light" }), _jsx(Button, __assign({ disabled: true }, { children: "Disabled" })), _jsx(Button, __assign({ type: "light", icon: SearchIcon }, { children: "Search" }))] })] }));
        expect(ButtonGroup).toMatchSnapshot();
    });
});
//# sourceMappingURL=button.spec.js.map