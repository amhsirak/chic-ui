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
import { jsx as _jsx, Fragment as _Fragment, jsxs as _jsxs } from "react/jsx-runtime";
import React, { useCallback } from 'react';
import ReactDOM from 'react-dom';
import CrossIcon from '../../icons/Cross';
import { StyledDrawerBody, StyledDrawerClose, StyledDrawerContainer, StyledDrawerFooter, StyledDrawerHeader, StyledDrawerWrapper } from './styled';
var drawerSize = {
    default: '378px',
    large: '736px'
};
var Drawer = function (props, ref) {
    var _a = props.size, size = _a === void 0 ? 'default' : _a, _b = props.closable, closable = _b === void 0 ? true : _b, onClose = props.onClose, _c = props.closeIcon, closeIcon = _c === void 0 ? _jsx(CrossIcon, {}) : _c, _d = props.placement, placement = _d === void 0 ? 'right' : _d, _e = props.open, open = _e === void 0 ? false : _e, _f = props.container, container = _f === void 0 ? document.body : _f, drawerStyle = props.drawerStyle, headerStyle = props.headerStyle, header = props.header, bodyStyle = props.bodyStyle, children = props.children, footerStyle = props.footerStyle, footer = props.footer, height = props.height, width = props.width, style = props.style, className = props.className;
    var handleOnClose = useCallback(function () {
        if (closable && onClose && typeof onClose === 'function') {
            onClose();
        }
    }, [onClose, closable]);
    var customHeight = '100%';
    var customWidth = '100%';
    if (['left', 'right'].includes(placement)) {
        if (width) {
            customWidth = "".concat(width, "px");
        }
        else {
            customWidth = drawerSize[size];
        }
    }
    else {
        if (height) {
            customHeight = "".concat(height, "px");
        }
        else {
            customHeight = drawerSize[size];
        }
    }
    var drawer = (_jsx(StyledDrawerWrapper, __assign({ ref: ref, tabIndex: -1, open: open, onClick: handleOnClose, style: style, className: className }, { children: _jsxs(StyledDrawerContainer, __assign({ height: customHeight, width: customWidth, placement: placement, onClick: function (e) {
                e.stopPropagation();
            }, style: drawerStyle, open: open }, { children: [_jsxs(StyledDrawerHeader, __assign({ style: headerStyle }, { children: [closable && (_jsx(StyledDrawerClose, __assign({ onClick: handleOnClose, "aria-label": "close" }, { children: closeIcon }))), header || _jsx(_Fragment, { children: "\u00AD" })] })), _jsx(StyledDrawerBody, __assign({ style: bodyStyle }, { children: children })), footer && (_jsx(StyledDrawerFooter, __assign({ style: footerStyle }, { children: footer })))] })) })));
    return ReactDOM.createPortal(drawer, container);
};
export default React.forwardRef(Drawer);
//# sourceMappingURL=drawer.js.map