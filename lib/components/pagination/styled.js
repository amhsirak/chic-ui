var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
import styled from 'styled-components';
import { theme as typeColors } from '../../tokens/themes';
export var Container = styled.div(templateObject_1 || (templateObject_1 = __makeTemplateObject([""], [""])));
export var PageButton = styled.button(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n  padding: 0.5rem 0.6rem;\n  border: 1px solid rgba(0, 0, 0, 0.2);\n  border-right: none;\n  color: ", ";\n  background-color: ", ";\n  &:hover {\n    background-color: ", ";\n\n    color: ", ";\n  }\n"], ["\n  padding: 0.5rem 0.6rem;\n  border: 1px solid rgba(0, 0, 0, 0.2);\n  border-right: none;\n  color: ", ";\n  background-color: ", ";\n  &:hover {\n    background-color: ", ";\n\n    color: ", ";\n  }\n"])), function (_a) {
    var bgType = _a.bgType, activePage = _a.activePage, buttonPage = _a.buttonPage, activeColor = _a.activeColor, customBg = _a.customBg;
    return !isNaN(activePage) && activePage === buttonPage
        ? activeColor
        : customBg
            ? customBg.color
            : typeColors[bgType].color;
}, function (_a) {
    var bgType = _a.bgType, customBg = _a.customBg, activePage = _a.activePage, buttonPage = _a.buttonPage, activeBg = _a.activeBg;
    return !isNaN(activePage) && activePage === buttonPage
        ? activeBg
        : customBg
            ? customBg.bgColor
            : typeColors[bgType].bgColor;
}, function (_a) {
    var bgType = _a.bgType, customBg = _a.customBg, activePage = _a.activePage, buttonPage = _a.buttonPage, activeBg = _a.activeBg;
    return !isNaN(activePage) && activePage === buttonPage
        ? activeBg
        : customBg
            ? customBg.hover
            : typeColors[customBg !== null && customBg !== void 0 ? customBg : bgType].hover;
}, function (_a) {
    var activeHoverColor = _a.activeHoverColor, activePage = _a.activePage, buttonPage = _a.buttonPage, customBg = _a.customBg, bgType = _a.bgType;
    return activeHoverColor && !isNaN(activePage) && activePage === buttonPage
        ? activeHoverColor
        : customBg
            ? customBg.color
            : typeColors[bgType].color;
});
export var PreviousButton = styled(PageButton)(templateObject_3 || (templateObject_3 = __makeTemplateObject(["\n  border-top-left-radius: 4px;\n  border-bottom-left-radius: 4px;\n  border-right: none;\n"], ["\n  border-top-left-radius: 4px;\n  border-bottom-left-radius: 4px;\n  border-right: none;\n"])));
export var NextButton = styled(PageButton)(templateObject_4 || (templateObject_4 = __makeTemplateObject(["\n  border-top-right-radius: 4px;\n  border-bottom-right-radius: 4px;\n  border-right: 1px solid rgba(0, 0, 0, 0.2);\n"], ["\n  border-top-right-radius: 4px;\n  border-bottom-right-radius: 4px;\n  border-right: 1px solid rgba(0, 0, 0, 0.2);\n"])));
var templateObject_1, templateObject_2, templateObject_3, templateObject_4;
//# sourceMappingURL=styled.js.map