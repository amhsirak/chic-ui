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
import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import Breadcrumb from '..';
import { render } from '../../../test/utils';
/* eslint-disable */
describe('Breadcrumb Component', function () {
    it('Renders Correctly', function () {
        var BreadcrumbGroup = render(_jsx(_Fragment, { children: _jsxs(Breadcrumb, __assign({ separator: "/" }, { children: [_jsx("div", { children: _jsx("a", __assign({ href: "https://www.google.com" }, { children: "Google" }), void 0) }, void 0), _jsx("div", { children: _jsx("a", __assign({ href: "https://facebook.com" }, { children: "Facebook" }), void 0) }, void 0), _jsx("div", { children: _jsx("a", __assign({ href: "https://twitter.com" }, { children: "Twitter" }), void 0) }, void 0)] }), void 0) }, void 0));
        expect(BreadcrumbGroup).toMatchSnapshot();
    });
});
//# sourceMappingURL=breadcrumb.spec.js.map