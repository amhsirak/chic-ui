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
import { StyledLink } from './styled';
var Link = function (props, ref) {
    var _a = props.disabled, disabled = _a === void 0 ? false : _a, className = props.className, children = props.children, _b = props.as, as = _b === void 0 ? 'a' : _b, href = props.href;
    return (_jsx(StyledLink, __assign({ ref: ref, disabled: disabled, className: className, as: disabled ? 'p' : as, href: href }, { children: children }), void 0));
};
export default React.forwardRef(Link);
//# sourceMappingURL=link.js.map