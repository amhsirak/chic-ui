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
function SvgCross(props) {
    return (_jsx("svg", __assign({ xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 490 490" }, props, { children: _jsx("path", { d: "M456.851 0L245 212.564 33.149 0 .708 32.337l211.961 212.667L.708 457.678 33.149 490 245 277.443 456.851 490l32.441-32.322-211.961-212.674L489.292 32.337z" }) })));
}
export default SvgCross;
//# sourceMappingURL=Cross.js.map