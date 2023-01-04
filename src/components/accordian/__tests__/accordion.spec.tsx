import Accordion from '..';
import { render } from '../../../test/utils';

/* eslint-disable */
describe('Accordian Component', () => {
    it('Renders Correctly', () => {
        const AccordionGroup = render(
            <>
                <Accordion header='Hello World' description='Short Description' />
            </>
        );
        expect(AccordionGroup).toMatchSnapshot();
    });
});
