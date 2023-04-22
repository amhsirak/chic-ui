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
import React, { useEffect, useState } from 'react';
import { StepsList } from './styled';
var Steps = function (props, ref) {
    var _a = props.type, type = _a === void 0 ? 'primary' : _a, _b = props.active, active = _b === void 0 ? 0 : _b, _c = props.direction, direction = _c === void 0 ? 'horizontal' : _c, _d = props.responsive, responsive = _d === void 0 ? true : _d, _e = props.onChange, onChange = _e === void 0 ? function (active) { } : _e, divider = props.divider, style = props.style, children = props.children, className = props.className;
    var _f = useState(direction), responsiveDir = _f[0], setResponsiveDir = _f[1];
    useEffect(function () {
        var media = window.matchMedia('(max-width: 470px)');
        var setDirection = function (media) {
            if (media.matches) {
                setResponsiveDir('vertical');
            }
            else {
                setResponsiveDir('horizontal');
            }
        };
        if (responsive) {
            media.onchange = setDirection;
            setDirection(media);
        }
        else {
            setResponsiveDir(direction);
        }
    }, [responsive, direction]);
    var stepsLength = React.Children.count(children);
    return (_jsx("div", __assign({ ref: ref }, { children: _jsx(StepsList, __assign({ dir: responsiveDir }, { children: React.Children.map(children, function (child, i) {
                return React.cloneElement(child, {
                    type: type,
                    responsive: responsive,
                    style: style,
                    className: className,
                    index: i,
                    length: stepsLength,
                    activeIndex: active,
                    direction: responsiveDir,
                    onChange: onChange,
                    divider: divider
                });
            }) })) })));
};
export default React.forwardRef(Steps);
//# sourceMappingURL=steps.js.map