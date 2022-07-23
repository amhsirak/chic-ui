import Skeleton from '..';
import { render } from '../../../test/utils';

/* eslint-disable */
describe('Skeleton Component', () => {
  it('Renders Correctly', () => {
    const SkeletonGroup = render(
      <>
        <Skeleton />
        <Skeleton width={80} height={60} />
        <Skeleton borderRadius="50%" />
      </>
    );
    expect(SkeletonGroup).toMatchSnapshot();
  });
});
