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
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import React, { useEffect, useState } from 'react';
import { SelectWrapper, SelectOption, StyledSelectDiv, SelectOptionWrapper, ArrowDown, StyledCross, MultiSelectOptionWrapper } from './styled';
var Select = function (_a, ref) {
    var className = _a.className, _b = _a.size, size = _b === void 0 ? 'default' : _b, disabled = _a.disabled, error = _a.error, multiSelect = _a.multiSelect, _c = _a.width, width = _c === void 0 ? '100%' : _c, data = _a.data, dataKey = _a.dataKey, dataName = _a.dataName, placeholder = _a.placeholder, onChange = _a.onChange;
    var _d = useState(false), showOptions = _d[0], setShowOptions = _d[1];
    var _e = useState(), selectedOption = _e[0], setSelectedOption = _e[1];
    useEffect(function () {
        onChange && onChange(selectedOption);
    }, [selectedOption]);
    var onOptionSelect = function (value) {
        if (!disabled) {
            var selectedValue = dataKey
                ? data === null || data === void 0 ? void 0 : data.find(function (option) { return option[dataKey] === value; })
                : value;
            multiSelect
                ? setMultiSelectOption(selectedValue)
                : setSelectedOption(selectedValue);
            if (!multiSelect) {
                setShowOptions(false);
            }
        }
    };
    var setMultiSelectOption = function (selectedValue) {
        if (selectedOption && selectedOption.length > 0) {
            var selected = dataKey
                ? selectedOption.find(function (option) { return option[dataKey] === selectedValue[dataKey]; })
                : selectedOption.includes(selectedValue);
            if (selected) {
                dataKey && dataName
                    ? setSelectedOption(selectedOption.filter(function (option) { return option[dataKey] !== selectedValue[dataKey]; }))
                    : setSelectedOption(selectedOption.filter(function (option) { return option !== selectedValue; }));
            }
            else {
                setSelectedOption(__spreadArray(__spreadArray([], selectedOption, true), [selectedValue], false));
            }
        }
        else {
            setSelectedOption([selectedValue]);
        }
    };
    var showSelectedOptionValue = function () {
        if (!multiSelect) {
            if (dataName) {
                return (selectedOption && selectedOption[dataName]) || placeholder;
            }
            else {
                return selectedOption || placeholder;
            }
        }
        else {
            return ((selectedOption &&
                selectedOption.length > 0 &&
                selectedOption.map(function (option) { return (_jsxs(MultiSelectOptionWrapper, { children: [dataKey && dataName ? option[dataName] : option, _jsx(StyledCross, { onClick: function (e) { return (e.stopPropagation, setMultiSelectOption(option)); } }, void 0)] }, void 0)); })) ||
                placeholder);
        }
    };
    return (_jsxs(SelectWrapper, __assign({ ref: ref, className: className, width: width }, { children: [_jsxs(StyledSelectDiv, __assign({ tabIndex: disabled ? undefined : 0, disabled: disabled || false, error: error || false, innerSize: size, onClick: function () { return !disabled && setShowOptions(!showOptions); } }, { children: [_jsx("div", { children: showSelectedOptionValue() }, void 0), _jsx(ArrowDown, {}, void 0)] }), void 0), showOptions && (_jsx(SelectOptionWrapper, { children: data &&
                    data.map(function (option, index) { return (_jsx(SelectOption, __assign({ selected: multiSelect &&
                            selectedOption &&
                            selectedOption.length > 0 &&
                            (dataKey && dataName
                                ? !!selectedOption.find(function (opt) { return opt[dataKey] === option[dataKey]; })
                                : selectedOption.includes(option)), onClick: function (e) { return (e.stopPropagation,
                            onOptionSelect(dataKey ? option[dataKey] : option)); } }, { children: dataKey && dataName ? option[dataName] : option }), option + "_" + index)); }) }, void 0))] }), void 0));
};
export default React.forwardRef(Select);
//# sourceMappingURL=select.js.map