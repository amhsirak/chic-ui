import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import Avatar from '..';
import { render } from '../../../test/utils';
/* eslint-disable */
describe('Avatar Component', function () {
    it('Renders Correctly', function () {
        var AvatarGroup = render(_jsxs(_Fragment, { children: [_jsxs("div", { children: [_jsx(Avatar, { src: "chic_copy.png", height: 120, width: 100 }, void 0), _jsx(Avatar, { src: "chic_copy.png", isActive: true }, void 0)] }, void 0), _jsxs("div", { children: [_jsx(Avatar, { name: "KS" }, void 0), _jsx(Avatar, { name: "KS", isActive: true }, void 0)] }, void 0)] }, void 0));
        expect(AvatarGroup).toMatchSnapshot();
    });
});
//# sourceMappingURL=avatar.spec.js.map