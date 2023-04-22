var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
import styled from 'styled-components';
import { spinnerWidth } from './sizes';
import { theme as typeColors } from '../../tokens/themes';
// Real tag is assigned dynamically
export var StyledSpinner = styled.span(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  box-sizing: border-box;\n  display: block;\n  border: ", "px solid transparent;\n  border-top: ", "px solid\n    ", ";\n  border-right: ", "px solid\n    ", ";\n  border-bottom: ", "px solid\n    ", ";\n  border-radius: 50%;\n  width: ", "px;\n  height: ", "px;\n  animation: spin 1s linear infinite;\n  @keyframes spin {\n    0% {\n      transform: rotate(0deg);\n    }\n    100% {\n      transform: rotate(360deg);\n    }\n  }\n"], ["\n  box-sizing: border-box;\n  display: block;\n  border: ", "px solid transparent;\n  border-top: ", "px solid\n    ", ";\n  border-right: ", "px solid\n    ", ";\n  border-bottom: ", "px solid\n    ", ";\n  border-radius: 50%;\n  width: ", "px;\n  height: ", "px;\n  animation: spin 1s linear infinite;\n  @keyframes spin {\n    0% {\n      transform: rotate(0deg);\n    }\n    100% {\n      transform: rotate(360deg);\n    }\n  }\n"])), function (pr) { return spinnerWidth(pr.size); }, function (pr) { return spinnerWidth(pr.size); }, function (pr) {
    return pr.innerType === 'light' ? '#d4d4d4' : typeColors[pr.innerType].hover;
}, function (pr) { return spinnerWidth(pr.size); }, function (pr) {
    return pr.innerType === 'light' ? '#d4d4d4' : typeColors[pr.innerType].hover;
}, function (pr) { return spinnerWidth(pr.size); }, function (pr) {
    return pr.innerType === 'light' ? '#d4d4d4' : typeColors[pr.innerType].hover;
}, function (pr) { return pr.size; }, function (pr) { return pr.size; });
var templateObject_1;
//# sourceMappingURL=styled.js.map