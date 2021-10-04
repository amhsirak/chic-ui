import React from 'react';
import { Story, Meta } from '@storybook/react';
import Card, { StyledCardProps } from '.';

export default {
  title: 'Components/Card',
  component: Card
} as Meta;

const Template: Story<StyledCardProps> = (args) => <Card {...args} />;

export const Default = Template.bind({});
Default.args = {
  children: 'Card',
  href: '#',
  src: 'chic_copy.png',
  height: '300px',
  width: '300px'
};

