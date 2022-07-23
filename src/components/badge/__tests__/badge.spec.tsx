import Badge from '..';
import { Avatar } from '../../avatar';
import { render } from '../../../test/utils';

/* eslint-disable */
describe('Badge Component', () => {
  it('Renders Correctly', () => {
    const BadgeGroup = render(
      <>
        <div>
          <Badge type="danger" offset={[0, 0]} count={3} showCount>
            <Avatar src="chic_copy.png" />
          </Badge>
          <Badge type="success" offset={[-13, 11]} count={0} showZero>
            <Avatar src="chic_copy.png" />
          </Badge>
        </div>
      </>
    );
    expect(BadgeGroup).toMatchSnapshot();
  });
});
