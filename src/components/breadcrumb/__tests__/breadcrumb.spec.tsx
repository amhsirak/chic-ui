import Breadcrumb from '..';
import { render } from '../../../test/utils';

/* eslint-disable */
describe('Breadcrumb Component', () => {
  it('Renders Correctly', () => {
    const BreadcrumbGroup = render(
      <>
        <Breadcrumb separator="/">
          <div>
            <a href="https://www.google.com">Google</a>
          </div>
          <div>
            <a href="https://facebook.com">Facebook</a>
          </div>
          <div>
            <a href="https://twitter.com">Twitter</a>
          </div>
        </Breadcrumb>
      </>
    );
    expect(BreadcrumbGroup).toMatchSnapshot();
  });
});
