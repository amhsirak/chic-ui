import React from 'react';
import { StyledLink } from './styled';
var Link = function (props, ref) {
    var _a = props.disabled, disabled = _a === void 0 ? false : _a, className = props.className, children = props.children, _b = props.as, as = _b === void 0 ? 'a' : _b, href = props.href;
    return (React.createElement(StyledLink, { ref: ref, disabled: disabled, className: className, as: disabled ? 'p' : as, href: href }, children));
};
export default React.forwardRef(Link);
//# sourceMappingURL=link.js.map