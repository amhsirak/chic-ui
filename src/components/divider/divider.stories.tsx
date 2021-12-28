import { Meta } from '@storybook/react';
import Divider from '.';

export default {
  title: 'Components/Divider',
  component: Divider
} as Meta;

export const All = () => {
  return (
    <>
      <Divider type="default" thickness={2} />
      <br />
      <Divider type="danger" dashed />
      <br />
      <Divider type="info" />
      <br />
      <Divider type="light" />
      <br />
      <Divider type="secondary" dashed />
      <br />
      <Divider type="success" />
      <br />
      <Divider type="warning" dashed />
    </>
  );
};
