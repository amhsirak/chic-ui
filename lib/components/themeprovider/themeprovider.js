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
import { ThemeProvider as StyledThemeProvider } from 'styled-components';
import { GlobalStyles } from '../../tokens/global.styles';
import { theme } from '../../tokens/themes';
var ThemeProvider = function (_a) {
    var children = _a.children;
    return (_jsxs(StyledThemeProvider, __assign({ theme: theme }, { children: [_jsx(GlobalStyles, {}, void 0), children] }), void 0));
};
export default ThemeProvider;
//# sourceMappingURL=themeprovider.js.map