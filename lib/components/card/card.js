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
    var className = props.className, href = props.href, src = props.src, title = props.title, subTitle = props.subTitle, children = props.children, footer = props.footer, hrefText = props.hrefText, description = props.description, style = props.style, _a = props.type, type = _a === void 0 ? 'light' : _a;
    return (_jsx(StyledCard, { children: _jsxs(StyledCardItem, __assign({ className: className, ref: ref, type: type, style: style }, { children: [src && _jsx(StyledImage, { src: src, width: '100%', height: '100%' }), title && _jsx(StyledTitle, { children: title }), subTitle && _jsx(StyledSubTitle, { children: subTitle }), description && _jsx(StyledDescription, { children: description }), footer && (_jsxs(StyledFooter, { children: [_jsx(StyledFooterText, { children: footer }), href && _jsx(StyledFooterLink, { href: href, children: hrefText })] })), children] })) }));
};
export default React.forwardRef(Card);
//# sourceMappingURL=card.js.map