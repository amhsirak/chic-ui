import React from 'react';
import { StyledImage } from './styled';
export var Card = function (props, ref) {
    var _a = props.width, width = _a === void 0 ? '100%' : _a, _b = props.height, height = _b === void 0 ? '100%' : _b, className = props.className, src = props.src;
    return (React.createElement(StyledImage, { src: src, ref: ref, width: width, height: height, className: className }));
};
export default React.forwardRef(Card);
//# sourceMappingURL=image.js.map