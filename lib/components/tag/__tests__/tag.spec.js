import { jsx as _jsx, Fragment as _Fragment, jsxs as _jsxs } from "react/jsx-runtime";
import Tag from '..';
import { render } from '../../../test/utils';
/* eslint-disable */
describe('Tag Component', function () {
    it('Renders Correctly', function () {
        var TagGroup = render(_jsxs(_Fragment, { children: [_jsx(Tag, { rounded: true }, void 0), _jsx(Tag, { type: "light" }, void 0), _jsx(Tag, { type: "secondary" }, void 0), _jsx(Tag, { type: "danger" }, void 0), _jsx(Tag, { type: "success" }, void 0), _jsx(Tag, { type: "warning" }, void 0), _jsx(Tag, { type: "info" }, void 0)] }, void 0));
        expect(TagGroup).toMatchSnapshot();
    });
});
//# sourceMappingURL=tag.spec.js.map