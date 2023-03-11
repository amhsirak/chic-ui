var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
import styled from 'styled-components';
import { theme as typeColors } from '../../tokens/themes';
import Cross from '../../icons/Cross';
// Real tag is assigned dynamically
export var StyledAlert = styled.div(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;\n  box-sizing: border-box;\n  padding: 15px 30px;\n  align-items: left;\n  border: none;\n  border-radius: 3px;\n  outline: none;\n  // width: 300px;\n  margin-right: 3px;\n  margin-bottom: 10px;\n  background-color: ", ";\n  color: ", ";\n  &:hover {\n    background-color: ", ";\n  }\n  &:focus {\n    outline: none;\n  }\n"], ["\n  box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;\n  box-sizing: border-box;\n  padding: 15px 30px;\n  align-items: left;\n  border: none;\n  border-radius: 3px;\n  outline: none;\n  // width: 300px;\n  margin-right: 3px;\n  margin-bottom: 10px;\n  background-color: ", ";\n  color: ", ";\n  &:hover {\n    background-color: ", ";\n  }\n  &:focus {\n    outline: none;\n  }\n"])), function (pr) { return typeColors[pr.innerType].bgColor; }, function (pr) { return typeColors[pr.innerType].color; }, function (pr) { return typeColors[pr.innerType].hover; });
export var StyledIcon = styled.div(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n  height: 20px;\n"], ["\n  height: 20px;\n"])));
export var StyledTitle = styled.div(templateObject_3 || (templateObject_3 = __makeTemplateObject(["\n  font-size: 15px;\n  font-weight: 600;\n  width: 100%;\n"], ["\n  font-size: 15px;\n  font-weight: 600;\n  width: 100%;\n"])));
export var StyledMessage = styled.div(templateObject_4 || (templateObject_4 = __makeTemplateObject(["\n  padding-top: 3px;\n  font-size: 13px;\n"], ["\n  padding-top: 3px;\n  font-size: 13px;\n"])));
export var StyledRow = styled.div(templateObject_5 || (templateObject_5 = __makeTemplateObject(["\n  display: flex;\n  align-items: center;\n"], ["\n  display: flex;\n  align-items: center;\n"])));
export var StyledDismissible = styled(Cross)(templateObject_6 || (templateObject_6 = __makeTemplateObject(["\n  float: right;\n  width: 10px;\n  cursor: pointer;\n  fill: #c9c9c9;\n  stroke: #c9c9c9;\n  stroke-width: 53px;\n"], ["\n  float: right;\n  width: 10px;\n  cursor: pointer;\n  fill: #c9c9c9;\n  stroke: #c9c9c9;\n  stroke-width: 53px;\n"])));
var templateObject_1, templateObject_2, templateObject_3, templateObject_4, templateObject_5, templateObject_6;
//# sourceMappingURL=styled.js.map