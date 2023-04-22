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
import { jsxs as _jsxs, jsx as _jsx } from "react/jsx-runtime";
import React from 'react';
import { StyledProgressBar, StyledLoadingText, StyledProgressWrapper } from './styled';
var ProgressBar = function (props) {
    var _a = props.progress, progress = _a === void 0 ? 70 : _a, _b = props.type, type = _b === void 0 ? 'primary' : _b, _c = props.showProgress, showProgress = _c === void 0 ? true : _c, style = props.style, className = props.className;
    return (_jsx(StyledProgressWrapper, { children: _jsx(StyledProgressBar, __assign({ type: type, width: progress, showProgress: showProgress, style: style, className: className }, props, { children: showProgress && (_jsx("div", __assign({ style: {
                    height: '100%',
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center'
                } }, { children: _jsxs(StyledLoadingText, __assign({ type: type }, { children: [progress, "% "] })) }))) })) }));
};
export default React.forwardRef(ProgressBar);
//# sourceMappingURL=progressBar.js.map