import { jsx as _jsx, Fragment as _Fragment, jsxs as _jsxs } from "react/jsx-runtime";
import Switch from '..';
import { render } from '../../../test/utils';
/* eslint-disable */
describe('Switch Component', function () {
    it('Renders Correctly', function () {
        var SwitchGroup = render(_jsxs(_Fragment, { children: [_jsx(Switch, {}), _jsx(Switch, { checked: true }), _jsx(Switch, { checked: true, type: "success" }), _jsx(Switch, { checked: true, type: "secondary" }), _jsx(Switch, { checked: true, type: "warning" }), _jsx(Switch, { checked: true, type: "danger" }), _jsx(Switch, { checked: true, type: "info" }), _jsx(Switch, { checked: true, type: "light" }), _jsx(Switch, { checked: true, disabled: true }), _jsx(Switch, { checked: true, size: "small" }), _jsx(Switch, { checked: true, size: "default" }), _jsx(Switch, { checked: true, size: "large" }), _jsx(Switch, { checked: true, padding: "small" }), _jsx(Switch, { checked: true, padding: "default" }), _jsx(Switch, { checked: true, padding: "large" })] }));
        expect(SwitchGroup).toMatchSnapshot();
    });
});
//# sourceMappingURL=switch.spec.js.map