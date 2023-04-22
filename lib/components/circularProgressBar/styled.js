var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
import styled from 'styled-components';
import { theme as typeColors } from '../../tokens/themes';
export var StyledCircularProgressWrapper = styled.div(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  height: 150px;\n  width: 150px;\n  background: conic-gradient(\n    ", "\n      ", ",\n    ", " 0\n  );\n  border-radius: 50%;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n"], ["\n  height: 150px;\n  width: 150px;\n  background: conic-gradient(\n    ", "\n      ", ",\n    ", " 0\n  );\n  border-radius: 50%;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n"])), function (props) { return typeColors[props.type].bgColor; }, function (props) { return props.degree + 'deg'; }, typeColors.light.hover);
export var StyledCircularProgressInnerCircle = styled.div(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n  height: 120px;\n  width: 120px;\n  background-color: #fff;\n  border-radius: 50%;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n"], ["\n  height: 120px;\n  width: 120px;\n  background-color: #fff;\n  border-radius: 50%;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n"])));
export var StyledLoadingText = styled.span(templateObject_3 || (templateObject_3 = __makeTemplateObject(["\n  font-weight: 700;\n  font-size: 20px;\n"], ["\n  font-weight: 700;\n  font-size: 20px;\n"])));
var templateObject_1, templateObject_2, templateObject_3;
//# sourceMappingURL=styled.js.map