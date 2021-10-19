import { Meta, Story } from '@storybook/react';
import Toast, { ToastProps } from './toast';

export default {
  title: 'Components/Toast',
  component: Toast,
  argTypes: {
    type: {
      options: ['success', 'info', 'warning', 'error'],
      control: { type: 'radio' }
    },
    title: {
      control: {
        type: 'text'
      }
    },
    message: {
      control: {
        type: 'text'
      }
    }
  },
  args: {
    type: 'success',
    title: 'Toast title',
    message: 'A description message'
  }
} as Meta;

const Template: Story<ToastProps> = (args) => <Toast {...args} />;

export const Success = Template.bind({});
export const Info = Template.bind({});
export const Warning = Template.bind({});
export const Error = Template.bind({});

Success.args = {
  title: 'Success toast',
  message: 'A new toast has been created',
  type: 'success',
  onClose: () => console.log('Toast closed')
};

Info.args = {
  title: 'Info toast',
  message: 'Your toast is ready to be displayed',
  type: 'info'
};

Warning.args = {
  title: 'Warning toast',
  message: 'A warning toast for you',
  type: 'warning'
};

Error.args = {
  title: 'Error toast',
  message: 'An error has occured',
  type: 'error'
};
