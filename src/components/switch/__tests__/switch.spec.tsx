import Switch from '..';
import { render } from '../../../test/utils';

/* eslint-disable */
describe('Switch Component', () => {
  it('Renders Correctly', () => {
    const SwitchGroup = render(
      <>
        <Switch />
        <Switch checked />
        <Switch checked type="success" />
        <Switch checked type="secondary" />
        <Switch checked type="warning" />
        <Switch checked type="danger" />
        <Switch checked type="info" />
        <Switch checked type="light" />
        <Switch checked disabled />
        <Switch checked size="small" />
        <Switch checked size="default" />
        <Switch checked size="large" />
        <Switch checked padding="small" />
        <Switch checked padding="default" />
        <Switch checked padding="large" />
      </>
    );
    expect(SwitchGroup).toMatchSnapshot();
  });
});
