import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import Divider from '..';
import { render } from '../../../test/utils';
/* eslint-disable */
describe('Divider Component', function () {
    it('Renders Correctly', function () {
        var DividerGroup = render(_jsxs(_Fragment, { children: [_jsxs("div", { children: [_jsx(Divider, {}, void 0), _jsx(Divider, { type: "danger" }, void 0), _jsx(Divider, { type: "info" }, void 0), _jsx(Divider, { type: "light" }, void 0), _jsx(Divider, { type: "secondary" }, void 0), _jsx(Divider, { type: "success" }, void 0), _jsx(Divider, { type: "warning" }, void 0)] }, void 0), _jsxs("div", { children: [_jsx(Divider, { dashed: true }, void 0), _jsx(Divider, { type: "danger", dashed: true }, void 0), _jsx(Divider, { type: "info", dashed: true }, void 0), _jsx(Divider, { type: "light", dashed: true }, void 0), _jsx(Divider, { type: "secondary", dashed: true }, void 0), _jsx(Divider, { type: "success", dashed: true }, void 0), _jsx(Divider, { type: "warning", dashed: true }, void 0)] }, void 0)] }, void 0));
        expect(DividerGroup).toMatchSnapshot();
    });
});
//# sourceMappingURL=divider.spec.js.map