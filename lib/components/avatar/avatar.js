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
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
import { jsx as _jsx } from "react/jsx-runtime";
import React from 'react';
import { StyledAvatar, StyledImage, StyledSpan } from './styled';
export var Avatar = function (props, ref) {
    var src = props.src, className = props.className, name = props.name, _a = props.isActive, isActive = _a === void 0 ? false : _a, _b = props.height, height = _b === void 0 ? 80 : _b, _c = props.width, width = _c === void 0 ? 80 : _c, rest = __rest(props, ["src", "className", "name", "isActive", "height", "width"]);
    return (_jsx(StyledAvatar, __assign({ height: height, width: width, src: src, ref: ref, isActive: isActive, className: className, name: name }, { children: src ? (_jsx(StyledImage, __assign({ alt: name, src: src }, rest), void 0)) : (_jsx(StyledSpan, __assign({}, rest, { children: name }), void 0)) }), void 0));
};
export default React.forwardRef(Avatar);
//# sourceMappingURL=avatar.js.map