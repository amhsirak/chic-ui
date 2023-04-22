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
import { forwardRef, useRef } from 'react';
import { StyledAccordion, StyledDescription, StyledDescriptionWrapper, StyledHeader } from './styled';
var Accordion = function (props, ref) {
    var header = props.header, description = props.description, className = props.className;
    var toggleRef = useRef(null);
    var descRef = useRef(null);
    var toggleHandler = function (event) {
        var _a, _b;
        event.stopPropagation();
        if (((_a = toggleRef === null || toggleRef === void 0 ? void 0 : toggleRef.current) === null || _a === void 0 ? void 0 : _a.className.includes('open')) &&
            ((_b = descRef === null || descRef === void 0 ? void 0 : descRef.current) === null || _b === void 0 ? void 0 : _b.className.includes('open'))) {
            toggleRef.current.className = 'accordion-toggle-button';
            descRef.current.className = descRef.current.className.replace('open', 'close');
            event.currentTarget.className = event.currentTarget.className.replace('open', '');
        }
        else {
            if (toggleRef && descRef) {
                if (toggleRef.current && descRef.current) {
                    toggleRef.current.className = 'accordion-toggle-button open';
                    descRef.current.className =
                        descRef.current.className.split(' ')[0] +
                            ' ' +
                            descRef.current.className.split(' ')[1] +
                            ' accordion-description open';
                    event.currentTarget.className =
                        event.currentTarget.className.split(' ')[0] +
                            ' ' +
                            event.currentTarget.className.split(' ')[1] +
                            ' accordion-header open';
                }
            }
        }
    };
    return (_jsxs(StyledAccordion, __assign({ ref: ref, className: className }, { children: [_jsxs(StyledHeader, __assign({ className: "accordion-header", onClick: toggleHandler }, { children: [_jsx("div", __assign({ ref: toggleRef, className: "accordion-toggle-button" }, { children: _jsx("span", {}) })), header] })), _jsx(StyledDescriptionWrapper, __assign({ className: "desc-wrapper" }, { children: _jsx(StyledDescription, __assign({ className: "accordion-description close", ref: descRef }, { children: description })) }))] })));
};
export default forwardRef(Accordion);
//# sourceMappingURL=accordion.js.map