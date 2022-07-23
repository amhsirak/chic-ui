import ProgressBar from '..';
import { render } from '../../../test/utils';

/* eslint-disable */
describe('ProgressBar Component', () => {
  it('Renders Correctly', () => {
    const ProgressBarGroup = render(
      <>
        <ProgressBar progress={80} type="danger" />
        <ProgressBar progress={60} type="success" showProgress={false} />
        <ProgressBar progress={40} animated />
      </>
    );
    expect(ProgressBarGroup).toMatchSnapshot();
  });
});
