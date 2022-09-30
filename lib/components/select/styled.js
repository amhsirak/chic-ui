var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
import styled from 'styled-components';
import { heights } from '../../tokens/sizes';
import SvgArrowDown from '../../icons/ArrowDown';
import Cross from '../../icons/Cross';
export var SelectWrapper = styled.div(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  position: relative;\n  width: ", ";\n  display: flex;\n  flex-direction: column;\n"], ["\n  position: relative;\n  width: ", ";\n  display: flex;\n  flex-direction: column;\n"])), function (pr) { return pr.width; });
export var SelectOption = styled.li(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n  list-style: none;\n  border-radius: 2px;\n  background-color: ", ";\n  padding: 8px;\n  &:hover {\n    background-color: #e0e0e0;\n  }\n"], ["\n  list-style: none;\n  border-radius: 2px;\n  background-color: ", ";\n  padding: 8px;\n  &:hover {\n    background-color: #e0e0e0;\n  }\n"])), function (pr) {
    return pr.selected ? 'rgba(144, 202, 249, 0.6)' : '#EEEEEE';
});
export var StyledSelectDiv = styled.div(templateObject_3 || (templateObject_3 = __makeTemplateObject(["\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  width: 100%;\n  padding: 8px;\n  color: #000000;\n  border-radius: 8px;\n  transition: 0.1s ease-out;\n  box-shadow: inset 0 0 0 2px ", ";\n  background-color: ", ";\n  height: ", "px;\n  &:focus {\n    box-shadow: inset 0 0 0 2px ", ";\n  }\n  //Disabled\n  ", "\n"], ["\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  width: 100%;\n  padding: 8px;\n  color: #000000;\n  border-radius: 8px;\n  transition: 0.1s ease-out;\n  box-shadow: inset 0 0 0 2px ", ";\n  background-color: ", ";\n  height: ", "px;\n  &:focus {\n    box-shadow: inset 0 0 0 2px ", ";\n  }\n  //Disabled\n  ", "\n"])), function (pr) { return (pr.error ? '#d93848' : 'transparent'); }, function (pr) { return (pr.error ? 'ffe3e6' : '#EEEEEE'); }, function (pr) { return heights[pr.innerSize]; }, function (pr) { return (pr.error ? '#d93848' : '#000'); }, function (pr) {
    return pr.disabled &&
        "\n        background-color: #a6a6a6;\n        color: #5e5e5e;\n        cursor: not-allowed;\n        &:hover {\n            background-color: #a6a6a6 !important;\n            color: #5e5e5e !important;\n        }\n    ";
});
export var SelectOptionWrapper = styled.ul(templateObject_4 || (templateObject_4 = __makeTemplateObject(["\n  margin: 0;\n  background-color: #fffff;\n  width: 100%;\n  &:hover {\n    cursor: pointer;\n  }\n  padding: 0.5rem;\n  max-height: 250px;\n"], ["\n  margin: 0;\n  background-color: #fffff;\n  width: 100%;\n  &:hover {\n    cursor: pointer;\n  }\n  padding: 0.5rem;\n  max-height: 250px;\n"])));
export var ArrowDown = styled(SvgArrowDown)(templateObject_5 || (templateObject_5 = __makeTemplateObject(["\n  box-sizing: border-box;\n  height: 15px;\n"], ["\n  box-sizing: border-box;\n  height: 15px;\n"])));
export var StyledCross = styled(Cross)(templateObject_6 || (templateObject_6 = __makeTemplateObject(["\n  box-sizing: border-box;\n  padding-left: 3px;\n  height: 10px;\n"], ["\n  box-sizing: border-box;\n  padding-left: 3px;\n  height: 10px;\n"])));
export var MultiSelectOptionWrapper = styled.span(templateObject_7 || (templateObject_7 = __makeTemplateObject(["\n  padding-right: 10px;\n"], ["\n  padding-right: 10px;\n"])));
var templateObject_1, templateObject_2, templateObject_3, templateObject_4, templateObject_5, templateObject_6, templateObject_7;
//# sourceMappingURL=styled.js.map