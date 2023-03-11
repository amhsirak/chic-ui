import { jsx as _jsx, Fragment as _Fragment, jsxs as _jsxs } from "react/jsx-runtime";
import Alert from '..';
import { render } from '../../../test/utils';
/* eslint-disable */
describe('Alert Component', function () {
    it('Renders Correctly', function () {
        var AlertGroup = render(_jsxs(_Fragment, { children: [_jsx(Alert, { title: 'Title', message: 'message' }), _jsx(Alert, { type: "secondary", title: 'Title', message: 'message' }), _jsx(Alert, { type: "warning", title: 'Title', message: 'message' }), _jsx(Alert, { type: "success", title: 'Title', message: 'message' }), _jsx(Alert, { type: "danger", title: 'Title', message: 'message' }), _jsx(Alert, { type: "info", title: 'Title', message: 'message' }), _jsx(Alert, { type: "light", title: 'Title', message: 'message' })] }));
        expect(AlertGroup).toMatchSnapshot();
    });
});
//# sourceMappingURL=alert.spec.js.map