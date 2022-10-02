import { Meta } from '@storybook/react/types-6-0';
import Alert from '.';

export default {
  title: 'Components/Alert',
  component: Alert
} as Meta;

export const All = () => {
  return (
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
};
