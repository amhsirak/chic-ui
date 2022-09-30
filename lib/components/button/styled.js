var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
import styled from 'styled-components';
import { heights, sidePaddings } from '../../tokens/sizes';
import { theme as typeColors } from '../../tokens/themes';
// Real tag is assigned dynamically
export var StyledButton = styled.button(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  box-sizing: border-box;\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  font-size: 15px;\n  border: none;\n  border-radius: ", ";\n  outline: none;\n  cursor: pointer;\n  width: auto;\n  padding: 0 ", "px;\n  margin-right: 3px;\n  height: ", "px;\n  background-color: ", ";\n  color: ", ";\n  &:hover {\n    background-color: ", ";\n  }\n  &:focus {\n   outline: none;\n  }\n  & > *:nth-child(1) {\n    margin-left: ", "px;\n  }\n  ", "\n"], ["\n  box-sizing: border-box;\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  font-size: 15px;\n  border: none;\n  border-radius: ", ";\n  outline: none;\n  cursor: pointer;\n  width: auto;\n  padding: 0 ", "px;\n  margin-right: 3px;\n  height: ", "px;\n  background-color: ", ";\n  color: ", ";\n  &:hover {\n    background-color: ", ";\n  }\n  &:focus {\n   outline: none;\n  }\n  & > *:nth-child(1) {\n    margin-left: ", "px;\n  }\n  ", "\n"])), function (pr) { return (pr.isSearch ? '0px 8px 8px 0px' : '8px'); }, function (pr) { return sidePaddings[pr.size]; }, function (pr) { return heights[pr.size]; }, function (pr) { return typeColors[pr.innerType].bgColor; }, function (pr) { return typeColors[pr.innerType].color; }, function (pr) { return typeColors[pr.innerType].hover; }, function (pr) { return (pr.withText ? 7 : 5); }, function (pr) {
    return pr.disabled
        ? "\n        opacity: 0.6;\n        cursor: not-allowed;\n        "
        : '';
});
export var StyledIcon = styled.div(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n  height: 20px;\n"], ["\n  height: 20px;\n"])));
var templateObject_1, templateObject_2;
//# sourceMappingURL=styled.js.map