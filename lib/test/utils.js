import { jsx as _jsx } from "react/jsx-runtime";
import renderer from 'react-test-renderer';
import ThemeProvider from '../components/themeprovider';
// Provides UI Context to tested components
export var render = function (node) {
    return renderer.create(_jsx(ThemeProvider, { children: node }, void 0)).toJSON();
};
//# sourceMappingURL=utils.js.map