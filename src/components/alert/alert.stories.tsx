import { Meta, Story } from '@storybook/react';
import Alert, { AlertProps } from './alert';

export default {
  title: 'Components/Alert',
  component: Alert
} as Meta;

const Template: Story<AlertProps> = (args) => <Alert {...args} />;

export const All = () => {
  return (
    <>
    <Alert type='danger' title='Dangerous Alert' message='Oops, you are in danger!' />
    <Alert type='info' title='Info Alert' message='Some information' />
    <Alert type='success' title='Success Alert' message='Success yaayyy' />
    <Alert type='warning' title='Warning Alert' message='Warning warning warning' />
    </>
  )
}

