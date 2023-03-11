import { jsx as _jsx, Fragment as _Fragment } from "react/jsx-runtime";
import Card from '..';
import { render } from '../../../test/utils';
/* eslint-disable */
describe('Card Component', function () {
    it('Renders Correctly', function () {
        var CardGroup = render(_jsx(_Fragment, { children: _jsx(Card, { type: "secondary", title: "Title", subTitle: "Subtitle", description: "Lorem ipsum dolor sit amet, consectetur", footer: "Footer", href: "https://github.com/karishmashuklaa/chic-ui", hrefText: "Visit site" }) }));
        expect(CardGroup).toMatchSnapshot();
    });
});
//# sourceMappingURL=card.spec.js.map