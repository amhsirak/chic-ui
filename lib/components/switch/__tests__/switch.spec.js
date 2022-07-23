import { jsx as _jsx, Fragment as _Fragment, jsxs as _jsxs } from "react/jsx-runtime";
import Switch from '..';
import { render } from '../../../test/utils';
/* eslint-disable */
describe('Switch Component', function () {
    it('Renders Correctly', function () {
        var SwitchGroup = render(_jsxs(_Fragment, { children: [_jsx(Switch, {}, void 0), _jsx(Switch, { checked: true }, void 0), _jsx(Switch, { checked: true, type: "success" }, void 0), _jsx(Switch, { checked: true, type: "secondary" }, void 0), _jsx(Switch, { checked: true, type: "warning" }, void 0), _jsx(Switch, { checked: true, type: "danger" }, void 0), _jsx(Switch, { checked: true, type: "info" }, void 0), _jsx(Switch, { checked: true, type: "light" }, void 0), _jsx(Switch, { checked: true, disabled: true }, void 0), _jsx(Switch, { checked: true, size: "small" }, void 0), _jsx(Switch, { checked: true, size: "default" }, void 0), _jsx(Switch, { checked: true, size: "large" }, void 0), _jsx(Switch, { checked: true, padding: "small" }, void 0), _jsx(Switch, { checked: true, padding: "default" }, void 0), _jsx(Switch, { checked: true, padding: "large" }, void 0)] }, void 0));
        expect(SwitchGroup).toMatchSnapshot();
    });
});
//# sourceMappingURL=switch.spec.js.map