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
import React from 'react';
import { StyledAvatar, StyledImage, StyledBadge, StyledSpan } from './styled';
export var Avatar = function (props, ref) {
    var src = props.src, className = props.className, name = props.name, _a = props.hasBadge, hasBadge = _a === void 0 ? false : _a, _b = props.isActive, isActive = _b === void 0 ? false : _b, rest = __rest(props, ["src", "className", "name", "hasBadge", "isActive"]);
    return (React.createElement(StyledAvatar, __assign({ src: src, ref: ref, isActive: isActive }, rest),
        hasBadge && React.createElement(StyledBadge, null),
        src ? (React.createElement(StyledImage, __assign({ alt: name, src: src }, rest))) : (React.createElement(StyledSpan, __assign({}, rest), name))));
};
export default React.forwardRef(Avatar);
//# sourceMappingURL=avatar.js.map