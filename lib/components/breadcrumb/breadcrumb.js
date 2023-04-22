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
import React from 'react';
import { StyledBreadcrumb } from './styled';
var Breadcrumb = function (_a) {
    var separator = _a.separator, _b = _a.type, type = _b === void 0 ? 'primary' : _b, props = __rest(_a, ["separator", "type"]);
    var children = React.Children.toArray(props.children);
    var totalItems = children.length;
    var lastIndex = totalItems - 1;
    // * RETURNS CHILDREN WITH SEPARATORS
    children = children
        .map(toBreadcrumbItem)
        .reduce(withSeparator(lastIndex, separator), []);
    return _jsx(StyledBreadcrumb, __assign({ themeColor: type }, props, { children: children }));
};
var toBreadcrumbItem = function (child, index) { return (_jsx(BreadcrumbItem, { children: child }, "breadcrumb_item".concat(index))); };
var withSeparator = function (lastIndex, separator) {
    return function (acc, child, index) {
        var notLast = index < lastIndex;
        if (notLast) {
            acc.push([
                child,
                _jsx(BreadcrumbSeparator, { children: separator }, "breadcrumb_sep".concat(index))
            ]);
        }
        else {
            acc.push(child);
        }
        return acc;
    };
};
var BreadcrumbItem = function (_a) {
    var children = _a.children, props = __rest(_a, ["children"]);
    return (_jsx("li", __assign({ className: "breadcrumb-item" }, props, { children: children })));
};
var BreadcrumbSeparator = function (_a) {
    var children = _a.children, props = __rest(_a, ["children"]);
    return (_jsx("li", __assign({ className: "breadcrumb-separator" }, props, { children: children })));
};
export default Breadcrumb;
//# sourceMappingURL=breadcrumb.js.map