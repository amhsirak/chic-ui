import Link from '..';
import { render } from '../../../test/utils';

/* eslint-disable */
describe('Link Component', () => {
  it('Renders Correctly', () => {
    const LinkGroup = render(
      <>
        <Link href="https://github.com/karishmashuklaa/chic-ui">
          Link to Chic-UI Repository
        </Link>
        <Link href="https://github.com/karishmashuklaa/chic-ui" disabled>
          Disabled Link to Chic-UI Repository
        </Link>
      </>
    );
    expect(LinkGroup).toMatchSnapshot();
  });
});
