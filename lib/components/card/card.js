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
import { StyledCard, StyledCardItem, StyledDescription, StyledFooter, StyledFooterText, StyledFooterLink, StyledTitle, StyledSubTitle, StyledImage } from './styled';
export var Card = function (props, ref) {
    var className = props.className, href = props.href, src = props.src, title = props.title, subTitle = props.subTitle, children = props.children, footer = props.footer, hrefText = props.hrefText, description = props.description, _a = props.type, type = _a === void 0 ? 'light' : _a;
    return (_jsx(StyledCard, { children: _jsxs(StyledCardItem, __assign({ className: className, ref: ref, type: type }, { children: [src && _jsx(StyledImage, { src: src, width: '100%', height: '100%' }, void 0), title && _jsx(StyledTitle, { children: title }, void 0), subTitle && _jsx(StyledSubTitle, { children: subTitle }, void 0), description && _jsx(StyledDescription, { children: description }, void 0), footer && (_jsxs(StyledFooter, { children: [_jsx(StyledFooterText, { children: footer }, void 0), href && _jsx(StyledFooterLink, { href: href, children: hrefText }, void 0)] }, void 0)), children] }), void 0) }, void 0));
};
export default React.forwardRef(Card);
//# sourceMappingURL=card.js.map