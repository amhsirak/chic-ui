import Spinner from '..';
import { render } from '../../../test/utils';

/* eslint-disable */
describe('Spinner Component', () => {
  it('Renders Correctly', () => {
    const SpinnerGroup = render(
      <>
        <Spinner size={40} />
        <Spinner type="primary" />
        <Spinner type="secondary" />
        <Spinner type="danger" />
        <Spinner type="success" />
        <Spinner type="warning" />
        <Spinner type="info" />
      </>
    );
    expect(SpinnerGroup).toMatchSnapshot();
  });
});
