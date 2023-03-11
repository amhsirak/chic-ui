var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
import styled from 'styled-components';
import { theme as typeColors } from '../../tokens/themes';
// Real HTML tag is assigned dynamically
export var StyledTag = styled.span(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  display: inline-block;\n  align-items: center;\n  justify-content: center;\n  font-size: 11px;\n  font-weight: bold;\n  border-radius: 4px;\n  outline: none;\n  padding: 3.3px 14px;\n  height: 0 23px;\n  background-color: ", ";\n  color: ", ";\n  // Rounded\n  ", "\n"], ["\n  display: inline-block;\n  align-items: center;\n  justify-content: center;\n  font-size: 11px;\n  font-weight: bold;\n  border-radius: 4px;\n  outline: none;\n  padding: 3.3px 14px;\n  height: 0 23px;\n  background-color: ", ";\n  color: ", ";\n  // Rounded\n  ", "\n"])), function (pr) { return typeColors[pr.innerType].bgColor; }, function (pr) { return (pr.innerType === 'light' ? '#000' : '#fff'); }, function (pr) { return (pr.rounded ? "border-radius: 14px;" : ''); });
var templateObject_1;
//# sourceMappingURL=styled.js.map