var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
import styled from 'styled-components';
import { heights, switchPaddingNumbers } from '../../tokens/sizes';
import { theme as typeColors } from '../../tokens/themes';
function getBackgroundColor(pr) {
    if (pr.disabled) {
        return typeColors['light'].bgColor;
    }
    if (!pr.checked) {
        return typeColors['light'].hover;
    }
    return typeColors[pr.type].bgColor;
}
export var SwitchWrapper = styled.div(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  background-color: ", ";\n  padding: ", "px;\n  height: ", "px;\n  width: ", "px;\n  border-radius: ", "px;\n  cursor: ", ";\n  transition: all 250ms ease-in-out;\n"], ["\n  background-color: ", ";\n  padding: ", "px;\n  height: ", "px;\n  width: ", "px;\n  border-radius: ", "px;\n  cursor: ", ";\n  transition: all 250ms ease-in-out;\n"])), getBackgroundColor, function (pr) { return switchPaddingNumbers[pr.padding]; }, function (pr) { return heights[pr.size]; }, function (pr) { return heights[pr.size] * 2; }, function (pr) { return heights[pr.size] / 2; }, function (pr) { return (pr.disabled ? 'default' : 'pointer'); });
SwitchWrapper.displayName = 'SwitchWrapper';
export var SwitchToggle = styled.div(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n  aspect-ratio: 1;\n  width: ", "px;\n  height: ", "px;\n  background-color: ", ";\n  transition: all 250ms ease-in-out;\n  transform: translateX(", "px);\n  border-radius: ", "px;\n"], ["\n  aspect-ratio: 1;\n  width: ", "px;\n  height: ", "px;\n  background-color: ", ";\n  transition: all 250ms ease-in-out;\n  transform: translateX(", "px);\n  border-radius: ", "px;\n"])), function (pr) { return heights[pr.size] - switchPaddingNumbers[pr.padding] * 2; }, function (pr) { return heights[pr.size] - switchPaddingNumbers[pr.padding] * 2; }, function (pr) { return (pr.disabled ? '#c0c0c0' : '#fff'); }, function (pr) { return (pr.checked ? heights[pr.size] : 0); }, function (pr) { return heights[pr.size] / 2; });
SwitchToggle.displayName = 'SwitchToggle';
var templateObject_1, templateObject_2;
//# sourceMappingURL=styled.js.map