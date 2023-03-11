var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
import styled, { keyframes, css } from 'styled-components';
import { theme as typeColors } from '../../tokens/themes';
// Animation
var animationAttributes = function () {
    return css(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n    ", " 30s linear infinite\n  "], ["\n    ", " 30s linear infinite\n  "])), keys);
};
var keys = keyframes(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n    0% { background-position-x: 0vw }\n    100% { background-position-x: 100vw }\n"], ["\n    0% { background-position-x: 0vw }\n    100% { background-position-x: 100vw }\n"])));
export var StyledProgressBar = styled.div(templateObject_5 || (templateObject_5 = __makeTemplateObject(["\n  display: inline-block;\n  height: 25px;\n  border-radius: 8px;\n  background-color: ", ";\n  width: ", "%;\n  ", ";\n  ", ";\n\n  ", ";\n"], ["\n  display: inline-block;\n  height: 25px;\n  border-radius: 8px;\n  background-color: ", ";\n  width: ", "%;\n  ", ";\n  ", ";\n\n  ", ";\n"])), function (pr) { return typeColors[pr.type].bgColor; }, function (pr) { return pr.width; }, function (pr) { return pr.animated && "transition: width 1s ease-in-out"; }, function (pr) {
    return pr.striped && css(templateObject_3 || (templateObject_3 = __makeTemplateObject(["\n      background-image: linear-gradient(\n        135deg,\n        hsla(0, 0%, 100%, 0.25) 25%,\n        transparent 0,\n        transparent 50%,\n        hsla(0, 0%, 100%, 0.25) 0,\n        hsla(0, 0%, 100%, 0.25) 75%,\n        transparent 0,\n        transparent\n      );\n      background-size: 40px 40px;\n      background-repeat: repeat;\n    "], ["\n      background-image: linear-gradient(\n        135deg,\n        hsla(0, 0%, 100%, 0.25) 25%,\n        transparent 0,\n        transparent 50%,\n        hsla(0, 0%, 100%, 0.25) 0,\n        hsla(0, 0%, 100%, 0.25) 75%,\n        transparent 0,\n        transparent\n      );\n      background-size: 40px 40px;\n      background-repeat: repeat;\n    "])));
}, function (pr) {
    return pr.stripedAnimated && css(templateObject_4 || (templateObject_4 = __makeTemplateObject(["\n      animation: ", ";\n    "], ["\n      animation: ", ";\n    "])), animationAttributes);
});
export var StyledProgressWrapper = styled.div(templateObject_6 || (templateObject_6 = __makeTemplateObject(["\n  position: relative;\n  height: 25px;\n  background-color: ", ";\n  width: 100%;\n  border-radius: 8px;\n"], ["\n  position: relative;\n  height: 25px;\n  background-color: ", ";\n  width: 100%;\n  border-radius: 8px;\n"])), typeColors.light.hover);
export var StyledLoadingText = styled.span(templateObject_7 || (templateObject_7 = __makeTemplateObject(["\n  display: flex,\n  justifyContent: center,\n  alignItems: center\n  height: 100%;\n  color: ", ";\n  padding-left: 12px;\n"], ["\n  display: flex,\n  justifyContent: center,\n  alignItems: center\n  height: 100%;\n  color: ", ";\n  padding-left: 12px;\n"])), function (pr) { return typeColors[pr.type].color; });
var templateObject_1, templateObject_2, templateObject_3, templateObject_4, templateObject_5, templateObject_6, templateObject_7;
//# sourceMappingURL=styled.js.map