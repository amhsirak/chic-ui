var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
import styled from 'styled-components';
import { theme as typeColors } from '../../tokens/themes';
export var Wrapper = styled.div(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  position: relative;\n  display: inline-block;\n"], ["\n  position: relative;\n  display: inline-block;\n"])));
export var StyledBadge = styled.div(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n  position: absolute;\n  z-index: 2;\n  border-radius: 9999px;\n  background: ", ";\n  padding: 4px 6px;\n  text-align: center;\n  color: ", ";\n  font-size: 11px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  transform: translate(40%, -40%);\n  box-shadow: 0 0 0 1px ", ";\n\n  ", "\n\n  ", "\n"], ["\n  position: absolute;\n  z-index: 2;\n  border-radius: 9999px;\n  background: ", ";\n  padding: 4px 6px;\n  text-align: center;\n  color: ", ";\n  font-size: 11px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  transform: translate(40%, -40%);\n  box-shadow: 0 0 0 1px ", ";\n\n  ", "\n\n  ", "\n"])), function (pr) { return typeColors[pr.type].bgColor; }, function (pr) { return typeColors[pr.type].color; }, typeColors.light.bgColor, function (pr) {
    return pr.offset &&
        "\n    right: " + (0 - pr.offset[0]) + "px;\n    top: " + (0 + pr.offset[1]) + "px;\n  ";
}, function (pr) {
    return pr.showCount
        ? "\n    min-width: 19px;\n    height: 19px;\n  "
        : "\n    min-width: 13px;\n    height: 13px;\n  ";
});
var templateObject_1, templateObject_2;
//# sourceMappingURL=styled.js.map