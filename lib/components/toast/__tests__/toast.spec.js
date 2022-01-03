var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
import { jsx as _jsx, Fragment as _Fragment } from "react/jsx-runtime";
import toast from '..';
import { render } from '../../../test/utils';
describe('Toast Component', function () {
    it('Renders Correctly', function () {
        var ToastGroup = render(_jsx(_Fragment, { children: _jsx("button", __assign({ onClick: function () {
                    return toast.open({
                        title: 'ERROR!',
                        message: 'Please enter your name',
                        type: 'danger',
                        duration: 3000
                    });
                } }, { children: "Show toast" }), void 0) }, void 0));
        expect(ToastGroup).toMatchSnapshot();
    });
});
//# sourceMappingURL=toast.spec.js.map