import { jsx as _jsx, Fragment as _Fragment, jsxs as _jsxs } from "react/jsx-runtime";
import Backdrop from '..';
import { render } from '../../../test/utils';
/* eslint-disable */
describe('Backdrop Component', function () {
    it('Renders Correctly', function () {
        var BackdropGroup = render(_jsxs(_Fragment, { children: [_jsx(Backdrop, {}), _jsx(Backdrop, { color: "#e4f0f4" }), _jsx(Backdrop, { visible: false })] }));
        expect(BackdropGroup).toMatchSnapshot();
    });
});
//# sourceMappingURL=backdrop.spec.js.map