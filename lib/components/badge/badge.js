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
import React from 'react';
import { Wrapper, StyledBadge } from './styled';
var Badge = function (props, ref) {
    var _a = props.count, count = _a === void 0 ? 0 : _a, limit = props.limit, _b = props.type, type = _b === void 0 ? 'primary' : _b, _c = props.showCount, showCount = _c === void 0 ? false : _c, _d = props.showZero, showZero = _d === void 0 ? false : _d, _e = props.offset, offset = _e === void 0 ? [0, 0] : _e, children = props.children, style = props.style, className = props.className;
    var isBadgeVisible = count !== 0 || showZero;
    var displayCount = limit && count > limit ? "".concat(limit, "+") : count;
    return (_jsx(Wrapper, __assign({ ref: ref }, { children: _jsxs(_Fragment, { children: [children, isBadgeVisible && (_jsx(StyledBadge, __assign({ offset: offset, type: type, showCount: showCount, style: style, className: className }, { children: showCount && displayCount })))] }) })));
};
export default React.forwardRef(Badge);
//# sourceMappingURL=badge.js.map