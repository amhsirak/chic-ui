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
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import React, { useCallback } from 'react';
import { SwitchToggle, SwitchWrapper } from './styled';
export var Switch = function (props, ref) {
    var _a = props.size, size = _a === void 0 ? 'default' : _a, _b = props.type, type = _b === void 0 ? 'primary' : _b, _c = props.padding, padding = _c === void 0 ? 'default' : _c, _d = props.checked, checked = _d === void 0 ? false : _d, _e = props.disabled, disabled = _e === void 0 ? false : _e, className = props.className, onChange = props.onChange;
    var handleOnChange = useCallback(function () {
        if (!disabled && onChange) {
            onChange();
        }
    }, [onChange, disabled]);
    return (_jsxs(SwitchWrapper, __assign({ type: type, size: size, className: className, disabled: disabled, padding: padding, checked: checked, onClick: handleOnChange }, { children: [_jsx("input", { ref: ref, type: "checkbox", checked: checked, hidden: true }, void 0), _jsx(SwitchToggle, { type: type, size: size, padding: padding, checked: checked, disabled: disabled }, void 0)] }), void 0));
};
export default React.forwardRef(Switch);
//# sourceMappingURL=switch.js.map