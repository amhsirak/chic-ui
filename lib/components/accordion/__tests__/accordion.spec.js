import { jsx as _jsx, Fragment as _Fragment } from "react/jsx-runtime";
import Accordion from '..';
import { render } from '../../../test/utils';
/* eslint-disable */
describe('Accordian Component', function () {
    it('Renders Correctly', function () {
        var AccordionGroup = render(_jsx(_Fragment, { children: _jsx(Accordion, { header: 'Hello World', description: 'Short Description' }) }));
        expect(AccordionGroup).toMatchSnapshot();
    });
});
//# sourceMappingURL=accordion.spec.js.map