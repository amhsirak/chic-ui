import { jsx as _jsx, Fragment as _Fragment, jsxs as _jsxs } from "react/jsx-runtime";
import Skeleton from '..';
import { render } from '../../../test/utils';
/* eslint-disable */
describe('Skeleton Component', function () {
    it('Renders Correctly', function () {
        var SkeletonGroup = render(_jsxs(_Fragment, { children: [_jsx(Skeleton, {}, void 0), _jsx(Skeleton, { width: 80, height: 60 }, void 0), _jsx(Skeleton, { borderRadius: "50%" }, void 0)] }, void 0));
        expect(SkeletonGroup).toMatchSnapshot();
    });
});
//# sourceMappingURL=skeleton.spec.js.map