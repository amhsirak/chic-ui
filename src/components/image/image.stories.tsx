import React from 'react';
import { Story, Meta } from '@storybook/react';
import Image, { ImageProps } from '.';

export default {
  title: 'Components/Image',
  component: Image
} as Meta;

const Template: Story<ImageProps> = (args) => <Image {...args} />;

export const Default = Template.bind({});
Default.args = {
  src: 'https://tinyurl.com/mpr6k7yd',
  height: '300px',
  width: '300px'
};

export const Circle = Template.bind({});
Circle.args = {
  src: 'https://tinyurl.com/mpr6k7yd',
  height: '300px',
  width: '300px',
  circle: true
};

export const Rounded = Template.bind({});
Rounded.args = {
  src: 'https://tinyurl.com/mpr6k7yd',
  height: '300px',
  width: '300px',
  rounded: true
};

export const Outline = Template.bind({});
Outline.args = {
  src: 'https://tinyurl.com/mpr6k7yd',
  height: '300px',
  width: '300px',
  outline: true
};
