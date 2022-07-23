import { jsx as _jsx, Fragment as _Fragment, jsxs as _jsxs } from "react/jsx-runtime";
import Image from '..';
import { render } from '../../../test/utils';
/* eslint-disable */
describe('Image Component', function () {
    it('Renders Correctly', function () {
        var ImageGroup = render(_jsxs(_Fragment, { children: [_jsx(Image, { src: "cat1.png", width: "160px", height: "130px" }, void 0), _jsx(Image, { src: "cat2.png", width: "160px", height: "130px" }, void 0), _jsx(Image, { src: "cat1.png", width: "160px", height: "130px", rounded: true }, void 0), _jsx(Image, { src: "cat2.png", width: "160px", height: "130px", circle: true }, void 0), _jsx(Image, { src: "cat3.png", width: "160px", height: "130px", outline: true }, void 0)] }, void 0));
        expect(ImageGroup).toMatchSnapshot();
    });
});
//# sourceMappingURL=image.spec.js.map