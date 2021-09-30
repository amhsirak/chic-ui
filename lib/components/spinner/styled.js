var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
import styled from 'styled-components';
import { spinnerWidth } from './sizes';
var typeColors = {
    blue: {
        regular: '#0018cf'
    },
    secondary: {
        regular: '#000'
    },
    danger: {
        regular: '#d93848'
    },
    warning: {
        regular: '#de9b00'
    },
    success: {
        regular: '#039e2f'
    },
    default: {
        regular: '#e3e3de'
    }
};
// Real tag is assigned dynamically
export var StyledSpinner = styled.span(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n    box-sizing: border-box;\n    display: block;\n    border: ", "px solid transparent;\n    border-top: ", "px solid ", ";\n    border-right: ", "px solid ", ";\n    border-bottom: ", "px solid ", ";\n    border-radius: 50%;\n    width: ", "px;\n    height: ", "px;\n    animation: spin 1s linear infinite;\n    @keyframes spin {\n        0% { transform: rotate(0deg); }\n        100% { transform: rotate(360deg); }\n    }\n"], ["\n    box-sizing: border-box;\n    display: block;\n    border: ", "px solid transparent;\n    border-top: ", "px solid ", ";\n    border-right: ", "px solid ", ";\n    border-bottom: ", "px solid ", ";\n    border-radius: 50%;\n    width: ", "px;\n    height: ", "px;\n    animation: spin 1s linear infinite;\n    @keyframes spin {\n        0% { transform: rotate(0deg); }\n        100% { transform: rotate(360deg); }\n    }\n"])), function (pr) { return spinnerWidth(pr.size); }, function (pr) { return spinnerWidth(pr.size); }, function (pr) { return typeColors[pr.innerType].regular; }, function (pr) { return spinnerWidth(pr.size); }, function (pr) { return typeColors[pr.innerType].regular; }, function (pr) { return spinnerWidth(pr.size); }, function (pr) { return typeColors[pr.innerType].regular; }, function (pr) { return pr.size; }, function (pr) { return pr.size; });
var templateObject_1;
//# sourceMappingURL=styled.js.map