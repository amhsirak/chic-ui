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
import React, { useState } from 'react';
import { Container, NextButton, PageButton, PreviousButton } from './styled';
var Pagination = function (props, ref) {
    var pages = props.pages, startCountInZero = props.startCountInZero, whenPreviousPage = props.whenPreviousPage, whenNextPage = props.whenNextPage, whenPageChange = props.whenPageChange, _a = props.bgType, bgType = _a === void 0 ? 'primary' : _a, style = props.style, className = props.className;
    var _b = useState(startCountInZero ? 0 : 1), page = _b[0], setPage = _b[1];
    var goBack = function () {
        var current = page > 0 ? page - 1 : 0;
        if (!startCountInZero && current < 1) {
            current = 1;
        }
        setPage(current);
        whenPreviousPage(current);
    };
    var goForward = function () {
        var current = page < pages ? page + 1 : pages;
        if (startCountInZero && pages - 1 === page) {
            current = pages - 1;
        }
        setPage(current);
        whenNextPage(current);
    };
    var onChange = function (newPage) {
        setPage(newPage);
        whenPageChange(newPage);
    };
    return (_jsxs(Container, __assign({ ref: ref, style: style, className: className }, { children: [_jsx(PreviousButton, __assign({ onClick: goBack, bgType: bgType }, props, { children: "Previous" })), new Array(pages > 0 ? pages : 0).fill(0).map(function (v, i) { return (_jsx(PageButton, __assign({ activePage: page, buttonPage: startCountInZero ? i : i + 1, onClick: function () { return onChange(i === 0 ? (startCountInZero ? i : ++i) : i); }, bgType: bgType }, props, { children: startCountInZero ? i : ++i }), i)); }), _jsx(NextButton, __assign({ onClick: goForward, bgType: bgType }, props, { children: "Next" }))] })));
};
export default React.forwardRef(Pagination);
//# sourceMappingURL=pagination.js.map