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
import { StyledTag } from './styled';
var Tag = function (props, ref) {
    var _a = props.type, type = _a === void 0 ? 'primary' : _a, _b = props.rounded, rounded = _b === void 0 ? false : _b, className = props.className, children = props.children, style = props.style, as = props.as, to = props.to;
    var styles = {
        innerType: type,
        withText: children != null,
        rounded: rounded
    };
    if (as) {
        return (_jsx(StyledTag, __assign({ as: as, to: to, ref: ref, className: className }, styles, { children: children })));
    }
    return (_jsx(StyledTag, __assign({ as: as, type: "span", ref: ref, className: className, style: style }, styles, { children: children })));
};
export default React.forwardRef(Tag);
//# sourceMappingURL=tag.js.map