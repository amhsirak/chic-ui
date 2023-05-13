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
import { jsx as _jsx } from "react/jsx-runtime";
import React from 'react';
import { StyledBackdrop } from './styled';
export var Backdrop = function (props, ref) {
    var _a = props.visible, visible = _a === void 0 ? true : _a, color = props.color, style = props.style, className = props.className, children = props.children, onClick = props.onClick;
    var refObject = ref || React.createRef();
    var newRefObject = Object.assign({}, refObject);
    return (_jsx(StyledBackdrop, __assign({ visible: visible, color: color, style: style, className: className, onClick: onClick, ref: newRefObject }, { children: children })));
};
export default React.forwardRef(Backdrop);
//# sourceMappingURL=backdrop.js.map