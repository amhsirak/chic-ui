import { jsx as _jsx } from "react/jsx-runtime";
import React from 'react';
import { StyledDivider } from './styled';
var Divider = function (props, ref) {
    var _a = props.type, type = _a === void 0 ? 'secondary' : _a, className = props.className, dashed = props.dashed, _b = props.thickness, thickness = _b === void 0 ? 0.5 : _b;
    return (_jsx(StyledDivider, { ref: ref, className: className, type: type, dashed: dashed, thickness: thickness }, void 0));
};
export default React.forwardRef(Divider);
//# sourceMappingURL=divider.js.map