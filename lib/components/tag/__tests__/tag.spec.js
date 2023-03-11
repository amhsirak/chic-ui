import { jsx as _jsx, Fragment as _Fragment, jsxs as _jsxs } from "react/jsx-runtime";
import Tag from '..';
import { render } from '../../../test/utils';
/* eslint-disable */
describe('Tag Component', function () {
    it('Renders Correctly', function () {
        var TagGroup = render(_jsxs(_Fragment, { children: [_jsx(Tag, { rounded: true }), _jsx(Tag, { type: "light" }), _jsx(Tag, { type: "secondary" }), _jsx(Tag, { type: "danger" }), _jsx(Tag, { type: "success" }), _jsx(Tag, { type: "warning" }), _jsx(Tag, { type: "info" })] }));
        expect(TagGroup).toMatchSnapshot();
    });
});
//# sourceMappingURL=tag.spec.js.map