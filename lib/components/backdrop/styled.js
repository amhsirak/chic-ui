var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
import styled from 'styled-components';
export var StyledBackdrop = styled.div(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  ", "\n  position: fixed;\n  left: 0;\n  top: 0;\n  width: 100vw;\n  height: 100vh;\n  z-index: 9999;\n  background-color: ", ";\n"], ["\n  ", "\n  position: fixed;\n  left: 0;\n  top: 0;\n  width: 100vw;\n  height: 100vh;\n  z-index: 9999;\n  background-color: ", ";\n"])), function (props) {
    return props.visible
        ? "\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    justify-content: center;\n    "
        : 'display: none;';
}, function (props) {
    return props.color ? props.color : 'rgba(0,0,0,.5)';
});
var templateObject_1;
//# sourceMappingURL=styled.js.map