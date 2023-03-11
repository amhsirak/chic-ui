import { jsx as _jsx, Fragment as _Fragment, jsxs as _jsxs } from "react/jsx-runtime";
import Spinner from '..';
import { render } from '../../../test/utils';
/* eslint-disable */
describe('Spinner Component', function () {
    it('Renders Correctly', function () {
        var SpinnerGroup = render(_jsxs(_Fragment, { children: [_jsx(Spinner, { size: 40 }), _jsx(Spinner, { type: "primary" }), _jsx(Spinner, { type: "secondary" }), _jsx(Spinner, { type: "danger" }), _jsx(Spinner, { type: "success" }), _jsx(Spinner, { type: "warning" }), _jsx(Spinner, { type: "info" })] }));
        expect(SpinnerGroup).toMatchSnapshot();
    });
});
//# sourceMappingURL=spinner.spec.js.map