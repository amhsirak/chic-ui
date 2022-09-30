import { jsx as _jsx, Fragment as _Fragment, jsxs as _jsxs } from "react/jsx-runtime";
import Select from '..';
import { render } from '../../../test/utils';
/* eslint-disable */
describe('Select Component', function () {
    it('Renders Correctly', function () {
        var SelectGroup = render(_jsxs(_Fragment, { children: [_jsx("div", { children: _jsx(Select, { width: "200px", data: ['India', 'Japan', 'Germany', 'Russia'], placeholder: "Select a country", onChange: function (value) { return alert(value); } }, void 0) }, void 0), _jsx("div", { children: _jsx(Select, { multiSelect: true, width: "400px", data: [
                            { id: 1, game: 'Hockey' },
                            { id: 2, game: 'Football' },
                            { id: 3, game: 'Tennis' }
                        ], dataKey: "id", dataName: "game", placeholder: "Select a sport", onChange: function (value) { return alert(value); } }, void 0) }, void 0)] }, void 0));
        expect(SelectGroup).toMatchSnapshot();
    });
});
//# sourceMappingURL=select.spec.js.map