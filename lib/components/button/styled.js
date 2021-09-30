var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
import styled from 'styled-components';
import { heights, sidePaddings } from '../../config/sizes';
var typeColors = {
    default: {
        regular: '#0018cf',
        hover: '#001be8',
    },
    secondary: {
        regular: '#000',
        hover: '#212121',
    },
    danger: {
        regular: '#d93848',
        hover: '#eb4d5d',
    },
    warning: {
        regular: '#de9b00',
        hover: '#eba607'
    },
    success: {
        regular: '#039e2f',
        hover: '#03a832'
    },
    light: {
        regular: '#faf7f7',
        hover: '#f7f5f5',
    }
};
// Real tag is assigned dynamically
export var StyledButton = styled.button(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n    box-sizing: border-box;\n    display: inline-flex;\n    align-items: center;\n    justify-content: center;\n    font-size: 15px;\n    border: none;\n    border-radius: 8px;\n    outline: none;\n    cursor: pointer;\n    width: auto;\n    padding: 0 ", "px;\n    height: ", "px;\n    background-color: ", ";\n    color: ", ";\n    &:hover {\n        background-color: ", ";\n    }\n    &:focus {\n        box-shadow: 0 0 0 1px #fff, 0 0 0 2px ", ";\n    }\n\n    // Add margin for icon and loading\n    & > *:nth-child(1) {\n        margin-left: ", "px;\n    }\n\n    // Disabled button logic\n    ", "\n"], ["\n    box-sizing: border-box;\n    display: inline-flex;\n    align-items: center;\n    justify-content: center;\n    font-size: 15px;\n    border: none;\n    border-radius: 8px;\n    outline: none;\n    cursor: pointer;\n    width: auto;\n    padding: 0 ", "px;\n    height: ", "px;\n    background-color: ", ";\n    color: ", ";\n    &:hover {\n        background-color: ", ";\n    }\n    &:focus {\n        box-shadow: 0 0 0 1px #fff, 0 0 0 2px ", ";\n    }\n\n    // Add margin for icon and loading\n    & > *:nth-child(1) {\n        margin-left: ", "px;\n    }\n\n    // Disabled button logic\n    ", "\n"])), function (pr) { return sidePaddings[pr.size]; }, function (pr) { return heights[pr.size]; }, function (pr) { return typeColors[pr.innerType].regular; }, function (pr) { return pr.innerType === 'light'
    ? '#000'
    : '#fff'; }, function (pr) { return typeColors[pr.innerType].hover; }, function (pr) { return typeColors[pr.innerType].regular; }, function (pr) { return pr.withText ? 7 : 5; }, function (pr) { return pr.disabled ? "\n        opacity: 0.6;\n        cursor: not-allowed;\n        " : ''; });
export var StyledIcon = styled.div(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n    height: 20px;\n"], ["\n    height: 20px;\n"])));
var templateObject_1, templateObject_2;
//# sourceMappingURL=styled.js.map