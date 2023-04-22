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
import { StyledCircularProgressInnerCircle, StyledCircularProgressWrapper, StyledLoadingText } from './styled';
var CircularProgressBar = function (props) {
    var _a = props.progress, progress = _a === void 0 ? 70 : _a, _b = props.type, type = _b === void 0 ? 'primary' : _b, _c = props.showProgress, showProgress = _c === void 0 ? true : _c, style = props.style, className = props.className;
    var degree = 3.6 * progress;
    var getProgressAndDegree = function (value, maxValue) {
        if (value < 0)
            return 0;
        if (value > maxValue)
            return maxValue;
        return value;
    };
    return (_jsx(StyledCircularProgressWrapper, __assign({ type: type, style: style, className: className, degree: getProgressAndDegree(degree, 360) }, { children: _jsx(StyledCircularProgressInnerCircle, { children: _jsx(StyledLoadingText, { children: showProgress ? getProgressAndDegree(progress, 100) + '%' : null }) }) })));
};
export default React.forwardRef(CircularProgressBar);
//# sourceMappingURL=circularProgressBar.js.map