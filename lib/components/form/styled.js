var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
import styled from 'styled-components';
export var Error = styled.div(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  font-size: 0.8rem;\n  color: #ff3c33;\n  margin-top: 0.5rem;\n"], ["\n  font-size: 0.8rem;\n  color: #ff3c33;\n  margin-top: 0.5rem;\n"])));
export var StyledField = styled.div(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n  margin-bottom: 20px;\n"], ["\n  margin-bottom: 20px;\n"])));
export var StyledLabel = styled.label(templateObject_3 || (templateObject_3 = __makeTemplateObject(["\n  display: block;\n  font-size: 13px;\n  font-weight: normal;\n  margin-bottom: 8px;\n"], ["\n  display: block;\n  font-size: 13px;\n  font-weight: normal;\n  margin-bottom: 8px;\n"])));
export var StyledInput = styled.input(templateObject_4 || (templateObject_4 = __makeTemplateObject(["\n  display: block;\n  width: 100%;\n  border-radius: 0.25rem;\n  border: 1px solid #d2d2d2;\n  font-size: 14px;\n  color: #66686e;\n  ", "\n  ", "\n  ", "\n\n  ::placeholder {\n    color: #66686e;\n  }\n  :focus {\n    border-color: #007bff;\n    outline: none;\n  }\n"], ["\n  display: block;\n  width: 100%;\n  border-radius: 0.25rem;\n  border: 1px solid #d2d2d2;\n  font-size: 14px;\n  color: #66686e;\n  ", "\n  ", "\n  ", "\n\n  ::placeholder {\n    color: #66686e;\n  }\n  :focus {\n    border-color: #007bff;\n    outline: none;\n  }\n"])), function (_a) {
    var rows = _a.rows;
    return rows
        ? "\n    height: auto;\n    padding: 0.5rem 1rem;\n    resize: none;\n    "
        : "\n    height: 2.5rem;\n    padding: 0 1rem;\n    resize: none;\n  ";
}, function (_a) {
    var hasIcon = _a.hasIcon;
    return (hasIcon ? 'padding-left: 3rem;' : '');
}, function (_a) {
    var hasError = _a.hasError;
    return (hasError ? "border-color: #FF3C33;" : '');
});
export var StyledLabelRadio = styled.label(templateObject_5 || (templateObject_5 = __makeTemplateObject(["\n  display: inline-flex;\n  align-items: center;\n  font-size: 13px;\n  color: gray;\n  :not(:last-child) {\n    margin-right: 1.5rem;\n  }\n"], ["\n  display: inline-flex;\n  align-items: center;\n  font-size: 13px;\n  color: gray;\n  :not(:last-child) {\n    margin-right: 1.5rem;\n  }\n"])));
export var StyledRadio = styled.input(templateObject_6 || (templateObject_6 = __makeTemplateObject(["\n  visibility: hidden;\n  width: 0;\n  height: 0;\n  ~ span {\n    display: flex;\n    width: 1.25rem;\n    height: 1.25rem;\n    border: 1.5px ", " solid;\n    margin: 0.125rem 0.625rem 0.125rem 0.125rem;\n    border-radius: 50%;\n    align-items: center;\n    justify-content: center;\n  }\n  :checked ~ span:before {\n    content: '';\n    display: block;\n    width: 0.75rem;\n    height: 0.75rem;\n    position: absolute;\n    border-radius: 50%;\n    background-color: #007bff;\n  }\n"], ["\n  visibility: hidden;\n  width: 0;\n  height: 0;\n  ~ span {\n    display: flex;\n    width: 1.25rem;\n    height: 1.25rem;\n    border: 1.5px ", " solid;\n    margin: 0.125rem 0.625rem 0.125rem 0.125rem;\n    border-radius: 50%;\n    align-items: center;\n    justify-content: center;\n  }\n  :checked ~ span:before {\n    content: '';\n    display: block;\n    width: 0.75rem;\n    height: 0.75rem;\n    position: absolute;\n    border-radius: 50%;\n    background-color: #007bff;\n  }\n"])), function (_a) {
    var hasError = _a.hasError;
    return (hasError ? 'red' : '#66686E');
});
export var StyledLabelCheckbox = styled.label(templateObject_7 || (templateObject_7 = __makeTemplateObject(["\n  padding-left: 35px;\n  position: relative;\n  font-size: 13px;\n  cursor: pointer;\n  ::before {\n    content: '';\n    position: absolute;\n    left: 0;\n    top: 50%;\n    transform: translatey(-50%);\n    width: 20px;\n    height: 20px;\n    background-color: #fff;\n    border: 1px solid #d2d2d2;\n    border-radius: 4px;\n  }\n  ::after {\n    content: '';\n    position: absolute;\n    left: 5px;\n    top: 4px;\n    width: 11px;\n    height: 4px;\n    transform: rotate(-45deg);\n    border-left: 3px solid #007bff;\n    border-bottom: 3px solid #007bff;\n    opacity: 0;\n    visibility: hidden;\n    transition: 0.25s linear;\n  }\n"], ["\n  padding-left: 35px;\n  position: relative;\n  font-size: 13px;\n  cursor: pointer;\n  ::before {\n    content: '';\n    position: absolute;\n    left: 0;\n    top: 50%;\n    transform: translatey(-50%);\n    width: 20px;\n    height: 20px;\n    background-color: #fff;\n    border: 1px solid #d2d2d2;\n    border-radius: 4px;\n  }\n  ::after {\n    content: '';\n    position: absolute;\n    left: 5px;\n    top: 4px;\n    width: 11px;\n    height: 4px;\n    transform: rotate(-45deg);\n    border-left: 3px solid #007bff;\n    border-bottom: 3px solid #007bff;\n    opacity: 0;\n    visibility: hidden;\n    transition: 0.25s linear;\n  }\n"])));
export var StyledCheckbox = styled.input(templateObject_8 || (templateObject_8 = __makeTemplateObject(["\n  display: none;\n  :checked + ", "::after {\n    opacity: 1;\n    visibility: visible;\n  }\n"], ["\n  display: none;\n  :checked + ", "::after {\n    opacity: 1;\n    visibility: visible;\n  }\n"])), StyledLabelCheckbox);
var templateObject_1, templateObject_2, templateObject_3, templateObject_4, templateObject_5, templateObject_6, templateObject_7, templateObject_8;
//# sourceMappingURL=styled.js.map