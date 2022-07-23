import { jsx as _jsx, Fragment as _Fragment, jsxs as _jsxs } from "react/jsx-runtime";
import ProgressBar from '..';
import { render } from '../../../test/utils';
/* eslint-disable */
describe('ProgressBar Component', function () {
    it('Renders Correctly', function () {
        var ProgressBarGroup = render(_jsxs(_Fragment, { children: [_jsx(ProgressBar, { progress: 80, type: "danger" }, void 0), _jsx(ProgressBar, { progress: 60, type: "success", showProgress: false }, void 0), _jsx(ProgressBar, { progress: 40, animated: true }, void 0)] }, void 0));
        expect(ProgressBarGroup).toMatchSnapshot();
    });
});
//# sourceMappingURL=progressbar.spec.js.map