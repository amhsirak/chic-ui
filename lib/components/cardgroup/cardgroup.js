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
import { StyledCards } from './styled';
export var CardGroup = function (props, ref) {
    var children = props.children;
    return (_jsx(StyledCards, __assign({ ref: ref }, { children: children }), void 0));
};
export default React.forwardRef(CardGroup);
//# sourceMappingURL=cardgroup.js.map