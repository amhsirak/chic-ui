import { jsx as _jsx, Fragment as _Fragment, jsxs as _jsxs } from "react/jsx-runtime";
import ProgressBar from '..';
import { render } from '../../../test/utils';
/* eslint-disable */
describe('ProgressBar Component', function () {
    it('Renders Correctly', function () {
        var ProgressBarGroup = render(_jsxs(_Fragment, { children: [_jsx(ProgressBar, { progress: 80, type: "danger" }), _jsx(ProgressBar, { progress: 60, type: "success", showProgress: false }), _jsx(ProgressBar, { progress: 40, animated: true }), _jsx(ProgressBar, { progress: 20, striped: true }), _jsx(ProgressBar, { progress: 30, striped: true, animated: true }), _jsx(ProgressBar, { progress: 40, striped: true, stripedAnimated: true }), _jsx(ProgressBar, { progress: 50, striped: true, stripedAnimated: true, animated: true })] }));
        expect(ProgressBarGroup).toMatchSnapshot();
    });
});
//# sourceMappingURL=progressbar.spec.js.map