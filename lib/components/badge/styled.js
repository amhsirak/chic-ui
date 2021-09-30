var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
import styled from 'styled-components';
var typeColors = {
    default: {
        regular: '#0018cf'
    },
    secondary: {
        regular: '#000'
    },
    danger: {
        regular: '#d93848'
    },
    warning: {
        regular: '#de9b00'
    },
    success: {
        regular: '#039e2f'
    },
    light: {
        regular: '#edede4'
    }
};
// Real tag is assigned dynamically
export var StyledBadge = styled.span(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n    display: inline-block;\n    align-items: center;\n    justify-content: center;\n    font-size: 12px;\n    font-weight: bold;\n    border-radius: 8px;\n    outline: none;\n    padding: 4.6px 15px;\n    height: 0 25px;\n    background-color: ", ";\n    color: ", ";\n    // Rounded \n    ", "\n"], ["\n    display: inline-block;\n    align-items: center;\n    justify-content: center;\n    font-size: 12px;\n    font-weight: bold;\n    border-radius: 8px;\n    outline: none;\n    padding: 4.6px 15px;\n    height: 0 25px;\n    background-color: ", ";\n    color: ", ";\n    // Rounded \n    ", "\n"])), function (pr) { return typeColors[pr.innerType].regular; }, function (pr) { return pr.innerType === 'light'
    ? '#000'
    : '#fff'; }, function (pr) { return pr.rounded ? "border-radius: 14px;" : ''; });
var templateObject_1;
//# sourceMappingURL=styled.js.map