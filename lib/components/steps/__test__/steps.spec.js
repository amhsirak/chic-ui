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
import Steps from '..';
import { render } from '../../../test/utils';
/* eslint-disable */
describe('Steps Component', function () {
    it('Renders Correctly', function () {
        var StepsGroup = render(_jsxs(_Fragment, { children: [_jsxs(Steps, __assign({ direction: "horizontal" }, { children: [_jsx(Steps.Step, { title: "Step One", subTitle: "Step one details" }), _jsx(Steps.Step, { title: "Step Two", subTitle: "Step two details" }), _jsx(Steps.Step, { title: "Step Three", subTitle: "Step three details" }), _jsx(Steps.Step, { title: "Step Four", subTitle: "Step four details" })] })), _jsxs(Steps, __assign({ direction: "vertical" }, { children: [_jsx(Steps.Step, { title: "Step One", subTitle: "Step one details" }), _jsx(Steps.Step, { title: "Step Two", subTitle: "Step two details" }), _jsx(Steps.Step, { title: "Step Three", subTitle: "Step three details" }), _jsx(Steps.Step, { title: "Step Four", subTitle: "Step four details" })] })), _jsxs(Steps, __assign({ divider: "------" }, { children: [_jsx(Steps.Step, { title: "Step One", subTitle: "Step one details" }), _jsx(Steps.Step, { title: "Step Two", subTitle: "Step two details" }), _jsx(Steps.Step, { title: "Step Three", subTitle: "Step three details" }), _jsx(Steps.Step, { title: "Step Four", subTitle: "Step four details" })] }))] }));
        expect(StepsGroup).toMatchSnapshot();
    });
});
//# sourceMappingURL=steps.spec.js.map