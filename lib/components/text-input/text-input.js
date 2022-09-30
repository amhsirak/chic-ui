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
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import React from 'react';
import { StyledWrapper, StyledTextInput, StyledIcon, StyledCross } from './styled';
var TextInput = function (props, ref) {
    var _a = props.size, size = _a === void 0 ? 'default' : _a, _b = props.disabled, disabled = _b === void 0 ? false : _b, icon = props.icon, _c = props.error, error = _c === void 0 ? false : _c, _d = props.width, width = _d === void 0 ? '100%' : _d, value = props.value, className = props.className, onChange = props.onChange, _e = props.readonly, readonly = _e === void 0 ? false : _e, _f = props.clearable, clearable = _f === void 0 ? false : _f, _g = props.search, search = _g === void 0 ? false : _g, placeholder = props.placeholder, rest = __rest(props, ["size", "disabled", "icon", "error", "width", "value", "className", "onChange", "readonly", "clearable", "search", "placeholder"]);
    var styles = {
        innerSize: size,
        disabled: disabled,
        error: error,
        width: width,
        withIcon: icon !== undefined,
        withCross: clearable,
        isSearch: search
    };
    return (_jsxs(StyledWrapper, __assign({ width: width, innerSize: size }, { children: [_jsx(StyledTextInput, __assign({ type: rest.type || 'text', value: value, onChange: onChange, readOnly: readonly, ref: ref, className: className, placeholder: placeholder }, styles, rest), void 0), _jsx(StyledIcon, { as: icon, innerSize: size }, void 0), clearable && value ? (_jsx(StyledCross, { innerSize: size, onClick: function () {
                    return onChange && onChange({ currentTarget: { value: '' } });
                } }, void 0)) : null] }), void 0));
};
export default React.forwardRef(TextInput);
//# sourceMappingURL=text-input.js.map