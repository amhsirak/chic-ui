var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
import styled from 'styled-components';
import { theme as typeColors } from '../../tokens/themes';
export var StyledDivider = styled.hr(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  border-width: ", "px;\n  border-style: ", ";\n  border-color: ", ";\n  width: 100%;\n  margin-left: auto;\n  margin-right: auto;\n"], ["\n  border-width: ", "px;\n  border-style: ", ";\n  border-color: ", ";\n  width: 100%;\n  margin-left: auto;\n  margin-right: auto;\n"])), function (pr) { return pr.thickness; }, function (pr) { return (pr.dashed ? "dashed" : "solid"); }, function (pr) { return typeColors[pr.type].bgColor; });
var templateObject_1;
//# sourceMappingURL=styled.js.map