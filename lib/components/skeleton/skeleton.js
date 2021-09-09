import React from 'react';
import { StyledSkeleton } from './styled';
export var Skeleton = function (props, ref) {
    var _a = props.width, width = _a === void 0 ? 100 : _a, _b = props.height, height = _b === void 0 ? 100 : _b, _c = props.borderRadius, borderRadius = _c === void 0 ? 'none' : _c, className = props.className;
    return (React.createElement(StyledSkeleton, { ref: ref, height: height, width: width, borderRadius: borderRadius, className: className }));
};
export default React.forwardRef(Skeleton);
//# sourceMappingURL=skeleton.js.map