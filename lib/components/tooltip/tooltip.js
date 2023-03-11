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
import { jsxs as _jsxs } from "react/jsx-runtime";
import React from "react";
import { StyledTooltip } from "./styled";
var Tooltip = function (props, ref) {
    var placement = props.placement, className = props.className, content = props.content, _a = props.type, type = _a === void 0 ? 'primary' : _a, style = props.style;
    var styles = {
        colorType: type
    };
    return (_jsxs(StyledTooltip, __assign({ type: "button", "aria-label": "".concat(content), placement: placement, className: className, style: style }, styles, { children: ["Tooltip on ", placement] })));
};
export default React.forwardRef(Tooltip);
//# sourceMappingURL=tooltip.js.map