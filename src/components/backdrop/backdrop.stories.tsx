import React from 'react';
import { Story, Meta } from '@storybook/react';
import Backdrop, { BackdropProps } from '.';

export default {
  title: 'Components/Backdrop',
  component: Backdrop
} as Meta;

const Template: Story<BackdropProps> = (args) => <Backdrop {...args} />;

export const Default = Template.bind({});
Default.args = {
  zIndex: 101,
  relative: true
};

export const Coloured = Template.bind({});
Coloured.args = {
  color: 'gray',
  relative: true
};

export const NotVisible = Template.bind({});
NotVisible.args = {
  visible: false
};
