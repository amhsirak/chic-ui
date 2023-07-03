import React from 'react';
import { StoryFn, Meta } from '@storybook/react';
import Backdrop, { BackdropProps } from '.';

export default {
  title: 'Components/Backdrop',
  component: Backdrop
} as Meta;

const Template: StoryFn<BackdropProps> = (args) => <Backdrop {...args} />;

export const Default = Template.bind({});
Default.args = {};

export const Coloured = Template.bind({});
Coloured.args = {
  color: 'gray'
};

export const NotVisible = Template.bind({});
NotVisible.args = {
  visible: false
};

export const withChildren = () => {
  const [open, setOpen] = React.useState(false);
  const handleClose = () => {
    setOpen(false);
  };
  const handleToggle = () => {
    setOpen(!open);
  };

  return (
    <>
      <button onClick={handleToggle}>Toggle</button>
      <Backdrop visible={open} onClick={handleClose}>
        <p>Hello world</p>
      </Backdrop>
    </>
  );
};
