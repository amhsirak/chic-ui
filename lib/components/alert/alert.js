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
import React, { useCallback } from 'react';
import { StyledAlert, StyledTitle, StyledMessage, StyledDismissible, StyledRow } from './styled';
var Alert = function (props, ref) {
    var _a = props.type, type = _a === void 0 ? 'primary' : _a, className = props.className, children = props.children, title = props.title, message = props.message, dismissible = props.dismissible, _b = props.show, show = _b === void 0 ? true : _b, onClose = props.onClose, style = props.style;
    var styles = {
        innerType: type,
        withText: children != null
    };
    var handleOnClose = useCallback(function () {
        if (show && onClose) {
            onClose();
        }
    }, [onClose, show]);
    return (_jsx(_Fragment, { children: show && (_jsxs(StyledAlert, __assign({ className: className, style: style }, styles, { children: [_jsxs(StyledRow, { children: [_jsx(StyledTitle, { children: title && title }), dismissible && _jsx(StyledDismissible, { onClick: handleOnClose })] }), _jsx(StyledMessage, { children: message && message })] }))) }));
};
export default React.forwardRef(Alert);
//# sourceMappingURL=alert.js.map