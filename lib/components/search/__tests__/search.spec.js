import { jsx as _jsx, Fragment as _Fragment, jsxs as _jsxs } from "react/jsx-runtime";
import Search from '..';
import { render } from '../../../test/utils';
/* eslint-disable */
describe('Search Component', function () {
    it('Renders Correctly', function () {
        var SearchGroup = render(_jsxs(_Fragment, { children: [_jsx(Search, { placeholder: "Search something...", width: "400px", value: "Value", onChange: function (e) { return alert("Value Changed"); } }, void 0), ";"] }, void 0));
        expect(SearchGroup).toMatchSnapshot();
    });
});
//# sourceMappingURL=search.spec.js.map