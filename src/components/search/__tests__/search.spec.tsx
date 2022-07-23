import Search from '..';
import { render } from '../../../test/utils';

/* eslint-disable */
describe('Search Component', () => {
  it('Renders Correctly', () => {
    const SearchGroup = render(
      <>
        <Search
          placeholder="Search something..."
          width="400px"
          value="Value"
          onChange={(e) => alert(`Value Changed`)}
        />
        ;
      </>
    );
    expect(SearchGroup).toMatchSnapshot();
  });
});
