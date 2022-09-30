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
import { jsx as _jsx, Fragment as _Fragment, jsxs as _jsxs } from "react/jsx-runtime";
import Link from '..';
import { render } from '../../../test/utils';
/* eslint-disable */
describe('Link Component', function () {
    it('Renders Correctly', function () {
        var LinkGroup = render(_jsxs(_Fragment, { children: [_jsx(Link, __assign({ href: "https://github.com/karishmashuklaa/chic-ui" }, { children: "Link to Chic-UI Repository" }), void 0), _jsx(Link, __assign({ href: "https://github.com/karishmashuklaa/chic-ui", disabled: true }, { children: "Disabled Link to Chic-UI Repository" }), void 0)] }, void 0));
        expect(LinkGroup).toMatchSnapshot();
    });
});
//# sourceMappingURL=link.spec.js.map