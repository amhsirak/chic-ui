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
import ReactDOM from 'react-dom';
import Drawer from '../drawer';
import { render } from '../../../test/utils';
/* eslint-disable */
describe('Drawer Component', function () {
    it('Renders Correctly', function () {
        ReactDOM.createPortal = jest.fn(function (children, container) {
            return children;
        });
        var DrawerGroup = render(_jsxs(_Fragment, { children: [_jsxs(Drawer, __assign({ placement: "right", header: "Drawer Header", footer: "Drawer Footer" }, { children: [_jsx("div", { children: "Some contents..." }), _jsx("div", { children: " Some contents..." }), _jsx("div", { children: " Some contents..." })] })), _jsxs(Drawer, __assign({ placement: "left", closable: false, header: "Drawer Header", footer: "Drawer Footer" }, { children: [_jsx("div", { children: "Some contents..." }), _jsx("div", { children: " Some contents..." }), _jsx("div", { children: " Some contents..." })] })), _jsxs(Drawer, __assign({ placement: "top" }, { children: [_jsx("div", { children: "Some contents..." }), _jsx("div", { children: " Some contents..." }), _jsx("div", { children: " Some contents..." })] })), _jsxs(Drawer, __assign({ placement: "bottom", size: "large", closeIcon: "X" }, { children: [_jsx("div", { children: "Some contents..." }), _jsx("div", { children: " Some contents..." }), _jsx("div", { children: " Some contents..." })] }))] }));
        expect(DrawerGroup).toMatchSnapshot();
    });
});
//# sourceMappingURL=drawer.spec.js.map