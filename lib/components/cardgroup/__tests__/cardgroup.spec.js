import { jsx as _jsx, Fragment as _Fragment } from "react/jsx-runtime";
import CardGroup from '..';
import { Card } from '../../card';
import { render } from '../../../test/utils';
/* eslint-disable */
describe('Card Group Component', function () {
    it('Renders Correctly', function () {
        var CardGroups = render(_jsx(_Fragment, { children: _jsx(CardGroup, { children: _jsx(Card, { type: "secondary", title: "Title", subTitle: "Subtitle", description: "Lorem ipsum dolor sit amet, consectetur", footer: "Footer", href: "https://github.com/karishmashuklaa/chic-ui", hrefText: "Visit site" }, void 0) }, void 0) }, void 0));
        expect(CardGroups).toMatchSnapshot();
    });
});
//# sourceMappingURL=cardgroup.spec.js.map