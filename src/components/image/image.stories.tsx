import React from 'react';
import { Story, Meta } from '@storybook/react';
import Image, { ImageProps } from '.';
import styled from 'styled-components';

export default {
  title: 'Components/Image',
  component: Image,
} as Meta;

const Template: Story<ImageProps> = (args) => <Image {...args} />;

export const Default = Template.bind({});
Default.args = {
    src: 'https://i1.sndcdn.com/avatars-000323919926-l9fdlc-t500x500.jpg',
}

export const WidthAndHeight = Template.bind({});
WidthAndHeight.args = {
  src: 'https://i1.sndcdn.com/avatars-000323919926-l9fdlc-t500x500.jpg',
  height: '300px',
  width: '300px'
}