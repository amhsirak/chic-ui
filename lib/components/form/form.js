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
import { jsx as _jsx } from "react/jsx-runtime";
import { Form as FinalForm } from 'react-final-form';
import Input from './input';
import Checkbox from './Checkbox/checkbox';
import Radio from './Radio/radio';
import SubmitButton from './submitButton';
import RadioGroup from './Radio/radioGroup';
import CheckboxGroup from './Checkbox/checkboxGroup';
;
var Form = function (props) {
    var onSubmit = props.onSubmit, children = props.children, restProps = __rest(props, ["onSubmit", "children"]);
    return (_jsx(FinalForm, __assign({ onSubmit: onSubmit }, { children: function (props) { return (_jsx("form", __assign({}, restProps, { onSubmit: props.handleSubmit, autoComplete: "off" }, { children: children }), void 0)); } }), void 0));
};
Form.Input = Input;
Form.Radio = Radio;
Form.Checkbox = Checkbox;
Form.RadioGroup = RadioGroup;
Form.SubmitButton = SubmitButton;
Form.CheckboxGroup = CheckboxGroup;
export default Form;
//# sourceMappingURL=form.js.map