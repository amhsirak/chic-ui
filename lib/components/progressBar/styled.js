var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
import styled from 'styled-components';
import { theme as typeColors } from '../../tokens/themes';
export var StyledProgressBar = styled.div(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  display: inline-block;\n  height: 25px;\n  background-color: ", ";\n  width: ", "%;\n  ", ";\n  border-radius: 8px;\n"], ["\n  display: inline-block;\n  height: 25px;\n  background-color: ", ";\n  width: ", "%;\n  ", ";\n  border-radius: 8px;\n"])), function (pr) { return typeColors[pr.type].bgColor; }, function (pr) { return pr.width; }, function (pr) { return pr.animated && "transition: width 1s ease-in-out"; });
export var StyledProgressWrapper = styled.div(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n  position: relative;\n  height: 25px;\n  background-color: ", ";\n  width: 100%;\n  border-radius: 8px;\n"], ["\n  position: relative;\n  height: 25px;\n  background-color: ", ";\n  width: 100%;\n  border-radius: 8px;\n"])), typeColors.light.hover);
export var StyledLoadingText = styled.span(templateObject_3 || (templateObject_3 = __makeTemplateObject(["\n  display: flex,\n  justifyContent: center,\n  alignItems: center\n  height: 100%;\n  color: ", ";\n  padding-left: 12px;\n"], ["\n  display: flex,\n  justifyContent: center,\n  alignItems: center\n  height: 100%;\n  color: ", ";\n  padding-left: 12px;\n"])), function (pr) { return typeColors[pr.type].color; });
var templateObject_1, templateObject_2, templateObject_3;
//# sourceMappingURL=styled.js.map