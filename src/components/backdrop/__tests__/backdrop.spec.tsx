import Backdrop from '..';
import { render } from '../../../test/utils';

/* eslint-disable */
describe('Backdrop Component', () => {
  it('Renders Correctly', () => {
    const BackdropGroup = render(
      <>
        <Backdrop />
        <Backdrop color="#e4f0f4" />
        <Backdrop visible={false} />
      </>
    );
    expect(BackdropGroup).toMatchSnapshot();
  });
});
