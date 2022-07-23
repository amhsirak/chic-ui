import Divider from '..';
import { render } from '../../../test/utils';

/* eslint-disable */
describe('Divider Component', () => {
  it('Renders Correctly', () => {
    const DividerGroup = render(
      <>
        <div>
          <Divider />
          <Divider type="danger" />
          <Divider type="info" />
          <Divider type="light" />
          <Divider type="secondary" />
          <Divider type="success" />
          <Divider type="warning" />
        </div>
        <div>
          <Divider dashed />
          <Divider type="danger" dashed />
          <Divider type="info" dashed />
          <Divider type="light" dashed />
          <Divider type="secondary" dashed />
          <Divider type="success" dashed />
          <Divider type="warning" dashed />
        </div>
      </>
    );
    expect(DividerGroup).toMatchSnapshot();
  });
});
