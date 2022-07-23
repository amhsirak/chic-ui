import Tag from '..';
import { render } from '../../../test/utils';

/* eslint-disable */
describe('Tag Component', () => {
  it('Renders Correctly', () => {
    const TagGroup = render(
      <>
        <Tag rounded />
        <Tag type="light" />
        <Tag type="secondary" />
        <Tag type="danger" />
        <Tag type="success" />
        <Tag type="warning" />
        <Tag type="info" />
      </>
    );
    expect(TagGroup).toMatchSnapshot();
  });
});
