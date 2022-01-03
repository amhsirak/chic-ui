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
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import React, { useEffect } from 'react';
import { ToastElement, ToastTitle, ToastMessage, ToastIcon } from './styled';
var Toast = function (props) {
    var close = props.close, message = props.message, title = props.title, _a = props.duration, duration = _a === void 0 ? 0 : _a, id = props.id, _b = props.type, type = _b === void 0 ? 'primary' : _b, icon = props.icon;
    useEffect(function () {
        if (!duration)
            return;
        var timer = setTimeout(function () {
            close();
        }, duration);
        console.log('RENDERED');
        return function () { return clearTimeout(timer); };
    }, [close, duration]);
    return (_jsxs(ToastElement, __assign({ close: close, message: message, title: title, duration: duration, id: id, type: type, icon: icon }, { children: [_jsx("button", __assign({ onClick: close }, { children: "X" }), void 0), icon && _jsx(ToastIcon, { as: icon }, void 0), _jsxs("div", { children: [_jsx(ToastTitle, { children: title }, void 0), _jsx(ToastMessage, { children: message }, void 0)] }, void 0)] }), void 0));
};
var shouldRerender = function (prevProps, nextProps) {
    return prevProps.id === nextProps.id;
};
export default React.memo(Toast, shouldRerender);
//# sourceMappingURL=toast.js.map