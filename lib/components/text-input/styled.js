var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
import styled from 'styled-components';
import { heights, sidePaddings } from '../../tokens/sizes';
import CrossIcon from '../../icons/Cross';
export var StyledWrapper = styled.div(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  position: relative;\n  height: ", "px;\n  max-width: ", ";\n"], ["\n  position: relative;\n  height: ", "px;\n  max-width: ", ";\n"])), function (pr) { return heights[pr.innerSize]; }, function (pr) { return pr.width; });
export var StyledTextInput = styled.input(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n  box-sizing: border-box;\n  position: relative;\n  color: #000;\n  border: none;\n  border-radius: ", ";\n  outline: none;\n  transition: 0.1s ease-out;\n  padding: 0;\n  padding-left: ", "px;\n  padding-right: ", "px;\n  height: ", "px;\n  width: 100%;\n  box-shadow: inset 0 0 0 2px ", ";\n  background-color: ", ";\n  &:focus {\n    box-shadow: inset 0 0 0 2px ", ";\n  }\n\n  // Disabled\n  ", "\n"], ["\n  box-sizing: border-box;\n  position: relative;\n  color: #000;\n  border: none;\n  border-radius: ", ";\n  outline: none;\n  transition: 0.1s ease-out;\n  padding: 0;\n  padding-left: ", "px;\n  padding-right: ", "px;\n  height: ", "px;\n  width: 100%;\n  box-shadow: inset 0 0 0 2px ", ";\n  background-color: ", ";\n  &:focus {\n    box-shadow: inset 0 0 0 2px ", ";\n  }\n\n  // Disabled\n  ", "\n"])), function (pr) { return (pr.isSearch ? '8px 0px 0px 8px' : '8px'); }, function (pr) {
    return sidePaddings[pr.innerSize] +
        (pr.withIcon ? sidePaddings[pr.innerSize] + 10 /* icon */ : 0);
}, function (pr) {
    return sidePaddings[pr.innerSize] +
        (pr.withIcon ? sidePaddings[pr.innerSize] : 0);
}, function (pr) { return heights[pr.innerSize]; }, function (pr) { return (pr.error ? '#d93848' : 'transparent'); }, function (pr) { return (pr.error ? 'ffe3e6' : '#EEEEEE'); }, function (pr) { return (pr.error ? '#d93848' : '#000'); }, function (pr) {
    return pr.disabled &&
        "\n        background-color: #a6a6a6;\n        color: #5e5e5e;\n        cursor: not-allowed;\n        \n        &:hover {\n            background-color: #a6a6a6 !important;\n            color: #5e5e5e !important;\n        }\n    ";
});
export var StyledIcon = styled.div.withConfig({
    shouldForwardProp: function (prop, defPropValFN) {
        return !['innerSize'].includes(prop) && defPropValFN(prop);
    }
})(templateObject_3 || (templateObject_3 = __makeTemplateObject(["\n  box-sizing: border-box;\n  position: absolute;\n  left: ", "px;\n  top: 50%;\n  transform: translateY(-50%);\n  cursor: pointer;\n  height: 15px;\n"], ["\n  box-sizing: border-box;\n  position: absolute;\n  left: ", "px;\n  top: 50%;\n  transform: translateY(-50%);\n  cursor: pointer;\n  height: 15px;\n"])), function (pr) { return sidePaddings[pr.innerSize]; });
export var StyledCross = styled(CrossIcon)(templateObject_4 || (templateObject_4 = __makeTemplateObject(["\n  box-sizing: border-box;\n  position: absolute;\n  right: ", "px;\n  top: 50%;\n  transform: translateY(-50%);\n  cursor: pointer;\n  height: 15px;\n"], ["\n  box-sizing: border-box;\n  position: absolute;\n  right: ", "px;\n  top: 50%;\n  transform: translateY(-50%);\n  cursor: pointer;\n  height: 15px;\n"])), function (pr) { return sidePaddings[pr.innerSize]; });
var templateObject_1, templateObject_2, templateObject_3, templateObject_4;
//# sourceMappingURL=styled.js.map