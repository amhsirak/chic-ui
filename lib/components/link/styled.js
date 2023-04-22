var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
import { theme as typeColors } from '../../tokens/themes';
import styled from 'styled-components';
export var StyledLink = styled.a(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  display: inline-block;\n  box-sizing: border-box;\n  color:", ";\n  cursor: pointer;\n  text-decoration: none;\n  margin: 0;\n  padding: 0;\n  font-size: 15px;\n  &:active,\n  &:visited {\n    color: ", ";\n    text-decoration: none;\n  }\n  &:focus,\n  &:hover {\n    color: ", ";\n  }\n  ", "\n"], ["\n  display: inline-block;\n  box-sizing: border-box;\n  color:", ";\n  cursor: pointer;\n  text-decoration: none;\n  margin: 0;\n  padding: 0;\n  font-size: 15px;\n  &:active,\n  &:visited {\n    color: ", ";\n    text-decoration: none;\n  }\n  &:focus,\n  &:hover {\n    color: ", ";\n  }\n  ", "\n"])), function (pr) { return typeColors[pr.type].bgColor; }, function (pr) { return typeColors[pr.type].bgColor; }, function (pr) { return typeColors[pr.type].hover; }, function (pr) {
    return pr.disabled &&
        "\n        cursor: not-allowed;\n        &, &:focus, &:visited, &:hover {\n            color: #5e5e5e;\n        }\n    ";
});
var templateObject_1;
//# sourceMappingURL=styled.js.map