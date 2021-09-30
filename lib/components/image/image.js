import React from 'react';
import { StyledImage } from './styled';
export var Image = function (props, ref) {
    var _a = props.width, width = _a === void 0 ? '100%' : _a, _b = props.height, height = _b === void 0 ? '100%' : _b, className = props.className, src = props.src, _c = props.rounded, rounded = _c === void 0 ? false : _c, _d = props.circle, circle = _d === void 0 ? false : _d, _e = props.outline, outline = _e === void 0 ? false : _e;
    return (React.createElement(StyledImage, { src: src, ref: ref, width: width, height: height, className: className, rounded: rounded, circle: circle, outline: outline }));
};
export default React.forwardRef(Image);
//# sourceMappingURL=image.js.map