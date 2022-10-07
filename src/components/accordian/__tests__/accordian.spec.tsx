import Accordian from '..';
import { render } from '../../../test/utils';

/* eslint-disable */
describe('Accordian Component', () => {
    it('Renders Correctly', () => {
        const AccordianGroup = render(
            <>
                <Accordian header='Hello World' description='Short Description' />
            </>
        );
        expect(AccordianGroup).toMatchSnapshot();
    });
});
