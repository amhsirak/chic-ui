import { Meta } from '@storybook/react';
import Spinner from '.';

export default {
  title: 'Components/Spinner',
  component: Spinner
} as Meta;

export const All = () => {
  return (
    <>
      <Spinner type="primary" />
      <Spinner type="danger" />
      <Spinner type="info" />
      <Spinner type="light" />
      <Spinner type="secondary" />
      <Spinner type="success" />
      <Spinner type="warning" />
    </>
  );
};
