import { Story, Meta } from '@storybook/react';
import Spinner, { SpinnerProps } from '.';

export default {
  title: 'Components/Spinner',
  component: Spinner
} as Meta;

const Template: Story<SpinnerProps> = (args) => <Spinner {...args} />;

export const All = () => {
  return (
    <>
    <Spinner type='default' />
    <Spinner type='danger' />
    <Spinner type='info' />
    <Spinner type='light' />
    <Spinner type='secondary' />
    <Spinner type='success' />
    <Spinner type='warning' />
    </>
  )
}
