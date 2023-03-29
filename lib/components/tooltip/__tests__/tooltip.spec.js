import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import Tooltip from '..';
import { render } from '../../../test/utils';
/* eslint-disable */
describe('Tooltip Component', function () {
    it('Renders Correctly', function () {
        var TooltipGroup = render(_jsxs(_Fragment, { children: [_jsxs("div", { children: [_jsx(Tooltip, { placement: "top", content: 'Tooltip top' }), _jsx(Tooltip, { placement: "left", content: 'Tooltip left' }), _jsx(Tooltip, { placement: "bottom", content: 'Tooltip bottom' }), _jsx(Tooltip, { placement: "right", content: 'Tooltip right' })] }), _jsxs("div", { children: [_jsx(Tooltip, { placement: "top", type: "secondary", content: 'Tooltip top' }), _jsx(Tooltip, { placement: "left", type: "secondary", content: 'Tooltip left' }), _jsx(Tooltip, { placement: "bottom", type: "secondary", content: 'Tooltip bottom' }), _jsx(Tooltip, { placement: "right", type: "secondary", content: 'Tooltip right' })] }), _jsxs("div", { children: [_jsx(Tooltip, { placement: "top", type: "danger", content: 'Tooltip top' }), _jsx(Tooltip, { placement: "left", type: "danger", content: 'Tooltip left' }), _jsx(Tooltip, { placement: "bottom", type: "danger", content: 'Tooltip bottom' }), _jsx(Tooltip, { placement: "right", type: "danger", content: 'Tooltip right' })] }), _jsxs("div", { children: [_jsx(Tooltip, { placement: "top", type: "warning", content: 'Tooltip top' }), _jsx(Tooltip, { placement: "left", type: "warning", content: 'Tooltip left' }), _jsx(Tooltip, { placement: "bottom", type: "warning", content: 'Tooltip bottom' }), _jsx(Tooltip, { placement: "right", type: "warning", content: 'Tooltip right' })] }), _jsxs("div", { children: [_jsx(Tooltip, { placement: "top", type: "success", content: 'Tooltip top' }), _jsx(Tooltip, { placement: "left", type: "success", content: 'Tooltip left' }), _jsx(Tooltip, { placement: "bottom", type: "success", content: 'Tooltip bottom' }), _jsx(Tooltip, { placement: "right", type: "success", content: 'Tooltip right' })] }), _jsxs("div", { children: [_jsx(Tooltip, { placement: "top", type: "info", content: 'Tooltip top' }), _jsx(Tooltip, { placement: "left", type: "info", content: 'Tooltip left' }), _jsx(Tooltip, { placement: "bottom", type: "info", content: 'Tooltip bottom' }), _jsx(Tooltip, { placement: "right", type: "info", content: 'Tooltip right' })] }), _jsxs("div", { children: [_jsx(Tooltip, { placement: "top", type: "light", content: 'Tooltip top' }), _jsx(Tooltip, { placement: "left", type: "light", content: 'Tooltip left' }), _jsx(Tooltip, { placement: "bottom", type: "light", content: 'Tooltip bottom' }), _jsx(Tooltip, { placement: "right", type: "light", content: 'Tooltip right' })] })] }));
        expect(TooltipGroup).toMatchSnapshot();
    });
});
//# sourceMappingURL=tooltip.spec.js.map