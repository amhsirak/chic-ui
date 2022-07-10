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
import { jsxs as _jsxs, jsx as _jsx } from "react/jsx-runtime";
import React from 'react';
import { StyledField, StyledLabel } from '../styled';
var CheckboxGroup = function (_a) {
    var _b = _a.name, name = _b === void 0 ? 'chk_group' : _b, label = _a.label, children = _a.children, required = _a.required, restProps = __rest(_a, ["name", "label", "children", "required"]);
    return (_jsxs(StyledField, __assign({}, restProps, { children: [!!label && (_jsxs(StyledLabel, __assign({ htmlFor: name }, { children: [label, !required && ' (Optional)'] }), void 0)), _jsx("div", __assign({ style: { position: 'relative' } }, { children: React.Children.map(children, function (child) {
                    return React.cloneElement(child, {
                        type: 'checkbox',
                        required: required
                    });
                }) }), void 0)] }), void 0));
};
export default CheckboxGroup;
//# sourceMappingURL=checkboxGroup.js.map