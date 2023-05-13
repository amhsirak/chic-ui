var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
import styled from 'styled-components';
export var StyledDrawerWrapper = styled.div(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  position: fixed;\n  inset: 0;\n  z-index: 1000;\n  pointer-events: ", ";\n  background: ", ";\n  transition: background 500ms ease-in-out;\n"], ["\n  position: fixed;\n  inset: 0;\n  z-index: 1000;\n  pointer-events: ", ";\n  background: ", ";\n  transition: background 500ms ease-in-out;\n"])), function (_a) {
    var open = _a.open;
    return (open ? 'auto' : 'none');
}, function (_a) {
    var open = _a.open;
    return (open ? ' rgba(0,0,0,.25)' : 'transparent');
});
export var StyledDrawerContainer = styled.div(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n  position: absolute;\n  width: ", ";\n  height: ", ";\n  background: #fff;\n  right: ", ";\n  left: ", ";\n  top: ", ";\n  bottom: ", ";\n  display: flex;\n  flex-direction: column;\n  transition: inset 500ms ease-in-out;\n  box-shadow: 0px 6px 24px rgba(0, 0, 0, 0.1);\n"], ["\n  position: absolute;\n  width: ", ";\n  height: ", ";\n  background: #fff;\n  right: ", ";\n  left: ", ";\n  top: ", ";\n  bottom: ", ";\n  display: flex;\n  flex-direction: column;\n  transition: inset 500ms ease-in-out;\n  box-shadow: 0px 6px 24px rgba(0, 0, 0, 0.1);\n"])), function (_a) {
    var width = _a.width;
    return "min(".concat(width, ",100%)");
}, function (_a) {
    var height = _a.height;
    return "min(".concat(height, ",100%)");
}, function (_a) {
    var placement = _a.placement, open = _a.open;
    return placement === 'right' ? (open ? 0 : '-999px') : '';
}, function (_a) {
    var placement = _a.placement, open = _a.open;
    return placement === 'left' ? (open ? 0 : '-999px') : '';
}, function (_a) {
    var placement = _a.placement, open = _a.open;
    return placement === 'top' ? (open ? 0 : '-999px') : '';
}, function (_a) {
    var placement = _a.placement, open = _a.open;
    return placement === 'bottom' ? (open ? 0 : '-999px') : '';
});
export var StyledDrawerHeader = styled.div(templateObject_3 || (templateObject_3 = __makeTemplateObject(["\n  display: flex;\n  align-items: center;\n  padding: 16px 24px;\n  line-height: 22px;\n  border-bottom: 1px solid rgba(0, 0, 0, 0.06);\n  gap: 8px;\n"], ["\n  display: flex;\n  align-items: center;\n  padding: 16px 24px;\n  line-height: 22px;\n  border-bottom: 1px solid rgba(0, 0, 0, 0.06);\n  gap: 8px;\n"])));
export var StyledDrawerClose = styled.button(templateObject_4 || (templateObject_4 = __makeTemplateObject(["\n  background: none;\n  border: none;\n  cursor: pointer;\n  line-height: 0;\n  transition: filter 300ms;\n  svg {\n    height: 12px;\n    width: 12px;\n  }\n  :hover,\n  :focus {\n    filter: drop-shadow(0.5px 0.5px 0.5px black);\n  }\n"], ["\n  background: none;\n  border: none;\n  cursor: pointer;\n  line-height: 0;\n  transition: filter 300ms;\n  svg {\n    height: 12px;\n    width: 12px;\n  }\n  :hover,\n  :focus {\n    filter: drop-shadow(0.5px 0.5px 0.5px black);\n  }\n"])));
export var StyledDrawerBody = styled.div(templateObject_5 || (templateObject_5 = __makeTemplateObject(["\n  flex: 1;\n  padding: 16px 24px;\n"], ["\n  flex: 1;\n  padding: 16px 24px;\n"])));
export var StyledDrawerFooter = styled.div(templateObject_6 || (templateObject_6 = __makeTemplateObject(["\n  padding: 16px 24px;\n  border-top: 1px solid rgba(0, 0, 0, 0.06);\n"], ["\n  padding: 16px 24px;\n  border-top: 1px solid rgba(0, 0, 0, 0.06);\n"])));
var templateObject_1, templateObject_2, templateObject_3, templateObject_4, templateObject_5, templateObject_6;
//# sourceMappingURL=styled.js.map