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
import React from 'react';
import Button from '../button';
import TextInput from '../text-input';
import { SearchWrapper } from './styled';
var Search = function (props, ref) {
    var className = props.className, value = props.value, onChange = props.onChange, placeholder = props.placeholder, _a = props.width, width = _a === void 0 ? '100%' : _a, style = props.style;
    var textInputStyles = {
        width: '100%'
        //placeholder
    };
    return (_jsxs(SearchWrapper, __assign({ ref: ref, className: className, width: width }, { children: [_jsx(TextInput, __assign({ value: value, onChange: onChange, placeholder: placeholder, clearable: true, isSearch: true, style: style }, textInputStyles)), _jsx(Button, __assign({ type: "secondary", search: true }, { children: "Search" }))] })));
};
export default React.forwardRef(Search);
//# sourceMappingURL=search.js.map