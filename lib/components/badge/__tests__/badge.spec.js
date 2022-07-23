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
import Badge from '..';
import { Avatar } from '../../avatar';
import { render } from '../../../test/utils';
/* eslint-disable */
describe('Badge Component', function () {
    it('Renders Correctly', function () {
        var BadgeGroup = render(_jsx(_Fragment, { children: _jsxs("div", { children: [_jsx(Badge, __assign({ type: "danger", offset: [0, 0], count: 3, showCount: true }, { children: _jsx(Avatar, { src: "chic_copy.png" }, void 0) }), void 0), _jsx(Badge, __assign({ type: "success", offset: [-13, 11], count: 0, showZero: true }, { children: _jsx(Avatar, { src: "chic_copy.png" }, void 0) }), void 0)] }, void 0) }, void 0));
        expect(BadgeGroup).toMatchSnapshot();
    });
});
//# sourceMappingURL=badge.spec.js.map