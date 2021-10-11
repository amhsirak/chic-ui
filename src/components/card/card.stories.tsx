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
  linkText: 'Link',
  src: 'chic_copy.png',
  height: '300px',
  width: '300px',
  header: 'Card Header',
  footer: 'Card Footer',
  description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
};

