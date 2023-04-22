import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import Avatar from '..';
import { render } from '../../../test/utils';
/* eslint-disable */
describe('Avatar Component', function () {
    it('Renders Correctly', function () {
        var AvatarGroup = render(_jsxs(_Fragment, { children: [_jsxs("div", { children: [_jsx(Avatar, { src: "chic_copy.png", height: 120, width: 100 }), _jsx(Avatar, { src: "chic_copy.png", isActive: true })] }), _jsxs("div", { children: [_jsx(Avatar, { name: "KS" }), _jsx(Avatar, { name: "KS", isActive: true })] })] }));
        expect(AvatarGroup).toMatchSnapshot();
    });
});
//# sourceMappingURL=avatar.spec.js.map