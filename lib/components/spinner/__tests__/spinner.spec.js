import { jsx as _jsx, Fragment as _Fragment, jsxs as _jsxs } from "react/jsx-runtime";
import Spinner from '..';
import { render } from '../../../test/utils';
/* eslint-disable */
describe('Spinner Component', function () {
    it('Renders Correctly', function () {
        var SpinnerGroup = render(_jsxs(_Fragment, { children: [_jsx(Spinner, { size: 40 }, void 0), _jsx(Spinner, { type: "primary" }, void 0), _jsx(Spinner, { type: "secondary" }, void 0), _jsx(Spinner, { type: "danger" }, void 0), _jsx(Spinner, { type: "success" }, void 0), _jsx(Spinner, { type: "warning" }, void 0), _jsx(Spinner, { type: "info" }, void 0)] }, void 0));
        expect(SpinnerGroup).toMatchSnapshot();
    });
});
//# sourceMappingURL=spinner.spec.js.map