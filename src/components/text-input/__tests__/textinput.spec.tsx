import TextInput from '..';
import { render } from '../../../test/utils';

/* eslint-disable */
describe('TextInput Component', () => {
  it('Renders Correctly', () => {
    const TextInputGroup = render(
      <>
        <TextInput placeholder="Type something..." size="small" />
        <TextInput placeholder="Type something..." width="200px" size="large" />
        <TextInput placeholder="Error Erorrr!" width="400px" error />
        <TextInput placeholder="Disabled Input" width="400px" disabled />
      </>
    );
    expect(TextInputGroup).toMatchSnapshot();
  });
});
