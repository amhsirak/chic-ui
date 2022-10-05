import Tooltip from '..';
import { render } from '../../../test/utils';

/* eslint-disable */
describe('Tooltip Component', () => {
    it('Renders Correctly', () => {
        const TooltipGroup = render(
        <>
            <Tooltip placement='top' content='Tooltip Top' className='tooltip top' />
            <Tooltip placement='left' content='Tooltip Left' className='tooltip left' />
            <Tooltip placement='bottom' content='Tooltip Bottom' className='tooltip bottom' />
            <Tooltip placement='right' content='Tooltip Right' className='tooltip right' />
        </>
        );
        expect(TooltipGroup).toMatchSnapshot();
    });
});
