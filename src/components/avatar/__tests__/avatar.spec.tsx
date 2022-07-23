import Avatar from '..';
import { render } from '../../../test/utils';

/* eslint-disable */
describe('Avatar Component', () => {
  it('Renders Correctly', () => {
    const AvatarGroup = render(
      <>
        <div>
          <Avatar src="chic_copy.png" height={120} width={100} />
          <Avatar src="chic_copy.png" isActive />
        </div>
        <div>
          <Avatar name="KS" />
          <Avatar name="KS" isActive />
        </div>
      </>
    );
    expect(AvatarGroup).toMatchSnapshot();
  });
});
