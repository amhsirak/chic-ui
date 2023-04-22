var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
import styled from 'styled-components';
import { theme as typeColors } from '../../tokens/themes';
export var StyledBreadcrumb = styled.ol(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  list-style: none;\n  display: flex;\n  align-items: center;\n  display: flex;\n  flex-direction: row;\n\n  .breadcrumb-separator {\n    align-items: center;\n    color: ", ";\n    display: flex;\n    margin: auto 6px;\n    user-select: none;\n  }\n\n  .breadcrumb-item {\n    color: ", ";\n  }\n\n  .breadcrumb-item:hover {\n    color: ", ";\n  }\n\n  a { \n    color: inherit;\n  }\n"], ["\n  list-style: none;\n  display: flex;\n  align-items: center;\n  display: flex;\n  flex-direction: row;\n\n  .breadcrumb-separator {\n    align-items: center;\n    color: ", ";\n    display: flex;\n    margin: auto 6px;\n    user-select: none;\n  }\n\n  .breadcrumb-item {\n    color: ", ";\n  }\n\n  .breadcrumb-item:hover {\n    color: ", ";\n  }\n\n  a { \n    color: inherit;\n  }\n"])), function (_a) {
    var themeColor = _a.themeColor;
    return typeColors[themeColor].bgColor;
}, function (_a) {
    var themeColor = _a.themeColor;
    return typeColors[themeColor].bgColor;
}, function (_a) {
    var themeColor = _a.themeColor;
    return typeColors[themeColor].hover;
});
var templateObject_1;
//# sourceMappingURL=styled.js.map