import Alert from '..';
import { render } from '../../../test/utils';

/* eslint-disable */
describe('Alert Component', () => {
  it('Renders Correctly', () => {
    const AlertGroup = render(
      <>
        <Alert title={'Title'} message={'message'}></Alert>
        <Alert type="secondary" title={'Title'} message={'message'}></Alert>
        <Alert type="warning" title={'Title'} message={'message'}></Alert>
        <Alert type="success" title={'Title'} message={'message'}></Alert>
        <Alert type="danger" title={'Title'} message={'message'}></Alert>
        <Alert type="info" title={'Title'} message={'message'}></Alert>
        <Alert type="light" title={'Title'} message={'message'}></Alert>
      </>
    );
    expect(AlertGroup).toMatchSnapshot();
  });
});
