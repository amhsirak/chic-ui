import React from 'react';
import { Meta, StoryFn } from '@storybook/react';
import Drawer, { DrawerProps } from '.';
import { useArgs } from '@storybook/client-api';

const Template: StoryFn<DrawerProps> = ({ ...args }) => {
  const [{ open }, updateArgs] = useArgs();
  const handleClose = () => updateArgs({ open: !open });
  return (
    <Drawer {...args} onClose={handleClose}>
      <div>Some contents...</div>
      <div> Some contents...</div>
      <div> Some contents...</div>
    </Drawer>
  );
};

export const Default = Template.bind({});

export default {
  title: 'Components/Drawer',
  component: Drawer,
  argTypes: {
    placement: {
      options: ['top', 'bottom', 'left', 'right'],
      control: 'radio'
    },
    open: { control: 'boolean' },
    size: {
      options: ['default', 'large'],
      control: 'radio'
    },
    height: { control: 'number' },
    width: { control: 'number' },
    onClose: {
      table: {
        category: 'Events',
        subcategory: 'Button Events'
      }
    },
    drawerStyle: { type: { name: 'style', required: false } },
    headerStyle: { type: { name: 'style', required: false } },
    bodyStyle: { type: { name: 'style', required: false } },
    footerStyle: { type: { name: 'style', required: false } }
  }
} as Meta<DrawerProps>;

Default.args = {
  open: true,
  size: 'default',
  closable: true,
  placement: 'right',
  header: 'Header Content',
  footer: 'Footer content'
};
