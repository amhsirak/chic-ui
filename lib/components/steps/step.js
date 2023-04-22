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
import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import React from 'react';
import { theme as typeColors } from '../../tokens/themes';
import { StepContent, StepIcon, StepIconWrapper, StepItem, StepItemWrapper, StepSeparator, StepSeparatorWrapper, StepSubTitle, StepTitle } from './styled';
var Step = function (props, ref) {
    var type = props.type, icon = props.icon, index = props.index, activeIndex = props.activeIndex, length = props.length, title = props.title, subTitle = props.subTitle, _a = props.onChange, onChange = _a === void 0 ? function (active) { } : _a, divider = props.divider, direction = props.direction;
    var state = index < activeIndex ? 'done' : 'pending';
    var iconStyles = {
        bgColor: '#ffff',
        color: state === 'done' ? typeColors[type].bgColor : '#949494',
        borderColor: state === 'done' ? typeColors[type].bgColor : '#949494',
        separatorColor: state === 'done' ? typeColors[type].bgColor : '#949494'
    };
    if (activeIndex === index) {
        state = 'active';
        iconStyles.bgColor = typeColors[type].bgColor;
        iconStyles.color = typeColors[type].color;
        iconStyles.borderColor = '';
    }
    var renderIcon = function (index) {
        return icon || (_jsx(StepIcon, __assign({ styles: iconStyles, type: type }, { children: index + 1 })));
    };
    return (_jsxs(_Fragment, { children: [_jsx(StepItemWrapper, __assign({ ref: ref }, { children: _jsxs(StepItem, __assign({ dir: direction }, { children: [_jsx(StepIconWrapper, __assign({ onClick: function () { return onChange(index); } }, { children: renderIcon(index) })), _jsxs(StepContent, __assign({ dir: direction }, { children: [title && _jsx(StepTitle, { children: title }), subTitle && _jsx(StepSubTitle, { children: subTitle })] }))] })) })), index !== length - 1 && (_jsx(StepSeparatorWrapper, __assign({ dir: direction }, { children: divider || (_jsx(StepSeparator, { dir: direction, styles: iconStyles })) })))] }));
};
export default React.forwardRef(Step);
//# sourceMappingURL=step.js.map