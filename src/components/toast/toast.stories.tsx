import { Meta } from '@storybook/react';
import Toast  from '.';

export default {
  title: 'Components/Toast',
  component: Toast
} as Meta;

export const All = () => {

  return (
    <>
      <Toast type="danger" title="LOGIN FAILED" message="Please enter correct credentials.Please enter correct credentialsPlease enter correct credentialsPlease enter correct credentialsPlease enter correct credentials" />
      <Toast type="info" title="Info Toast" message="Some information" />
      <Toast type="success" title="Success Toast" message="Success yaayyy" />
      <Toast type="warning" title="Warning Toast" message="Warning warning warning" />
    </>
  );
};
