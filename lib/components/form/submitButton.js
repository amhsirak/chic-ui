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
import { useFormState } from 'react-final-form';
import Button from '../button';
;
function SubmitButton(_a) {
    var children = _a.children;
    var _b = useFormState(), invalid = _b.invalid, submitting = _b.submitting;
    return (_jsx(Button, __assign({ loading: submitting, disabled: submitting || invalid, typeBtn: "submit" }, { children: children }), void 0));
}
export default SubmitButton;
//# sourceMappingURL=submitButton.js.map