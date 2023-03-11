import { jsx as _jsx, Fragment as _Fragment, jsxs as _jsxs } from "react/jsx-runtime";
import Pagination from '..';
import { render } from '../../../test/utils';
/* eslint-disable */
describe('Pagination Component', function () {
    it('Renders Correctly', function () {
        var PaginationGroup = render(_jsxs(_Fragment, { children: [_jsx("div", { children: _jsx(Pagination, { bgType: "success", pages: 7, startCountInZero: true, activeBg: "white", activeColor: "black", activeHoverColor: "black", whenNextPage: function (page) {
                            return alert("whenNextPage page hit, currently on page ".concat(page));
                        }, whenPreviousPage: function (page) {
                            return alert("whenPreviousPage page hit, currently on page ".concat(page));
                        }, whenPageChange: function (page) {
                            return alert("whenPageChange hit, currently on page ".concat(page));
                        } }) }), _jsx("div", { children: _jsx(Pagination, { customBg: {
                            bgColor: 'gray',
                            hover: 'black',
                            color: 'yellow'
                        }, pages: 4, activeBg: "white", activeColor: "black", activeHoverColor: "black", whenNextPage: function (page) {
                            return alert("whenNextPage page hit, currently on page ".concat(page));
                        }, whenPreviousPage: function (page) {
                            return alert("whenPreviousPage page hit, currently on page ".concat(page));
                        }, whenPageChange: function (page) {
                            return alert("whenPageChange hit, currently on page ".concat(page));
                        } }) })] }));
        expect(PaginationGroup).toMatchSnapshot();
    });
});
//# sourceMappingURL=pagination.spec.js.map