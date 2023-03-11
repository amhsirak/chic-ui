import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import Divider from '..';
import { render } from '../../../test/utils';
/* eslint-disable */
describe('Divider Component', function () {
    it('Renders Correctly', function () {
        var DividerGroup = render(_jsxs(_Fragment, { children: [_jsxs("div", { children: [_jsx(Divider, {}), _jsx(Divider, { type: "danger" }), _jsx(Divider, { type: "info" }), _jsx(Divider, { type: "light" }), _jsx(Divider, { type: "secondary" }), _jsx(Divider, { type: "success" }), _jsx(Divider, { type: "warning" })] }), _jsxs("div", { children: [_jsx(Divider, { dashed: true }), _jsx(Divider, { type: "danger", dashed: true }), _jsx(Divider, { type: "info", dashed: true }), _jsx(Divider, { type: "light", dashed: true }), _jsx(Divider, { type: "secondary", dashed: true }), _jsx(Divider, { type: "success", dashed: true }), _jsx(Divider, { type: "warning", dashed: true })] })] }));
        expect(DividerGroup).toMatchSnapshot();
    });
});
//# sourceMappingURL=divider.spec.js.map