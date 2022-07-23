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
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useField } from 'react-final-form';
import { Error, StyledField, StyledLabel } from './styled';
import { composeValidators, isRequired } from './validators';
function Field(_a) {
    var _b = _a.name, name = _b === void 0 ? '' : _b, type = _a.type, label = _a.label, required = _a.required, _c = _a.validate, validate = _c === void 0 ? [] : _c, children = _a.children, restProps = __rest(_a, ["name", "type", "label", "required", "validate", "children"]);
    var _d = useField(name, __assign(__assign({}, restProps), { type: type, validate: required
            ? composeValidators.apply(void 0, __spreadArray([isRequired], validate, false)) : composeValidators.apply(void 0, validate) })), input = _d.input, meta = _d.meta;
    if (type === 'radio' || type === 'checkbox') {
        return (_jsxs(StyledField, { children: [children({ input: input, meta: meta }), meta.error && _jsx(Error, { children: meta.error }, void 0)] }, void 0));
    }
    return (_jsxs(StyledField, { children: [!!label && (_jsxs(StyledLabel, __assign({ htmlFor: name }, { children: [label, !required && ' (Optional)'] }), void 0)), children({ input: input, meta: meta }), meta.error && meta.touched && _jsx(Error, { children: meta.error }, void 0)] }, void 0));
}
export default Field;
//# sourceMappingURL=field.js.map