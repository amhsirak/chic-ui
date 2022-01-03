import Avatar from '..';
import { render } from '../../../test/utils';

describe('Avatar Component', () => {
  it('Renders Correctly', () => {
    const AvatarGroup = render(
      <>
        <div>
          <Avatar src="chic_copy.png" />
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
