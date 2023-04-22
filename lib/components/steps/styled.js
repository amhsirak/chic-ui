var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
import styled from 'styled-components';
export var StepsList = styled.ul(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  margin: 0;\n  padding: 0;\n  list-style: none;\n  display: flex;\n  justify-content: ", ";\n  align-items: ", ";\n  flex-direction: ", "; ;\n"], ["\n  margin: 0;\n  padding: 0;\n  list-style: none;\n  display: flex;\n  justify-content: ", ";\n  align-items: ", ";\n  flex-direction: ", "; ;\n"])), function (_a) {
    var dir = _a.dir;
    return (dir === 'horizontal' ? 'center' : '');
}, function (_a) {
    var dir = _a.dir;
    return (dir === 'horizontal' ? 'center' : '');
}, function (_a) {
    var dir = _a.dir;
    return (dir === 'vertical' ? 'column' : '');
});
export var StepItemWrapper = styled.li(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n  width: 100%;\n"], ["\n  width: 100%;\n"])));
export var StepItem = styled.div(templateObject_3 || (templateObject_3 = __makeTemplateObject(["\n  display: flex;\n  justify-content: ", ";\n  text-align: ", ";\n  width: ", ";\n  position: relative;\n"], ["\n  display: flex;\n  justify-content: ", ";\n  text-align: ", ";\n  width: ", ";\n  position: relative;\n"])), function (_a) {
    var dir = _a.dir;
    return (dir === 'horizontal' ? 'center' : 'start');
}, function (_a) {
    var dir = _a.dir;
    return (dir === 'horizontal' ? 'center' : 'start');
}, function (_a) {
    var dir = _a.dir;
    return (dir === 'horizontal' ? '' : '100%');
});
export var StepContent = styled.div(templateObject_4 || (templateObject_4 = __makeTemplateObject(["\n  position: absolute;\n  top: ", ";\n  left: ", ";\n  margin-left: ", ";\n"], ["\n  position: absolute;\n  top: ", ";\n  left: ", ";\n  margin-left: ", ";\n"])), function (_a) {
    var dir = _a.dir;
    return (dir === 'horizontal' ? '32px' : '');
}, function (_a) {
    var dir = _a.dir;
    return (dir === 'vertical' ? '32px' : '');
}, function (_a) {
    var dir = _a.dir;
    return (dir === 'vertical' ? '8px' : '');
});
export var StepIconWrapper = styled.div(templateObject_5 || (templateObject_5 = __makeTemplateObject(["\n  position: relative;\n"], ["\n  position: relative;\n"])));
export var StepIcon = styled.div(templateObject_6 || (templateObject_6 = __makeTemplateObject(["\n  height: 32px;\n  width: 32px;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  background-color: ", ";\n  color: ", ";\n  border: ", ";\n  border-radius: 32px;\n"], ["\n  height: 32px;\n  width: 32px;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  background-color: ", ";\n  color: ", ";\n  border: ", ";\n  border-radius: 32px;\n"])), function (_a) {
    var styles = _a.styles;
    return styles.bgColor;
}, function (_a) {
    var styles = _a.styles;
    return styles.color;
}, function (_a) {
    var styles = _a.styles;
    return styles.borderColor ? "1px solid ".concat(styles.borderColor) : '';
});
export var StepTitle = styled.p(templateObject_7 || (templateObject_7 = __makeTemplateObject(["\n  margin-top: 8px;\n"], ["\n  margin-top: 8px;\n"])));
export var StepSubTitle = styled.p(templateObject_8 || (templateObject_8 = __makeTemplateObject(["\n  margin-top: 8px;\n  font-size: 14px;\n  color: #949494;\n"], ["\n  margin-top: 8px;\n  font-size: 14px;\n  color: #949494;\n"])));
export var StepSeparatorWrapper = styled.div(templateObject_9 || (templateObject_9 = __makeTemplateObject(["\n  width: ", ";\n  min-height: ", ";\n  margin-left: ", ";\n  margin-right: ", ";\n  min-width: ", ";\n"], ["\n  width: ", ";\n  min-height: ", ";\n  margin-left: ", ";\n  margin-right: ", ";\n  min-width: ", ";\n"])), function (_a) {
    var dir = _a.dir;
    return (dir === 'horizontal' ? '100%' : '');
}, function (_a) {
    var dir = _a.dir;
    return (dir === 'horizontal' ? '' : '3rem');
}, function (_a) {
    var dir = _a.dir;
    return (dir === 'horizontal' ? '-5rem' : '16px');
}, function (_a) {
    var dir = _a.dir;
    return (dir === 'horizontal' ? '-5rem' : '');
}, function (_a) {
    var dir = _a.dir;
    return (dir === 'horizontal' ? '6rem' : '');
});
export var StepSeparator = styled.div(templateObject_10 || (templateObject_10 = __makeTemplateObject(["\n  border-top: ", ";\n  border-left: ", ";\n  border-color: ", ";\n  height: ", ";\n  width: 100%;\n"], ["\n  border-top: ", ";\n  border-left: ", ";\n  border-color: ", ";\n  height: ", ";\n  width: 100%;\n"])), function (_a) {
    var dir = _a.dir;
    return (dir === 'horizontal' ? '1px solid' : '');
}, function (_a) {
    var dir = _a.dir;
    return (dir === 'vertical' ? '1px solid' : '');
}, function (_a) {
    var styles = _a.styles;
    return styles.separatorColor;
}, function (_a) {
    var dir = _a.dir;
    return (dir === 'horizontal' ? '' : '3rem');
});
var templateObject_1, templateObject_2, templateObject_3, templateObject_4, templateObject_5, templateObject_6, templateObject_7, templateObject_8, templateObject_9, templateObject_10;
//# sourceMappingURL=styled.js.map