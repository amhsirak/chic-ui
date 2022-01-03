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
import { StyledSpinner } from './styled';
var Spinner = function (props, ref) {
    var _a = props.type, type = _a === void 0 ? 'light' : _a, _b = props.size, size = _b === void 0 ? 50 : _b, className = props.className;
    var styles = {
        innerType: type,
        size: size
    };
    return _jsx(StyledSpinner, __assign({ ref: ref, className: className }, styles), void 0);
};
export default React.forwardRef(Spinner);
//# sourceMappingURL=spinner.js.map