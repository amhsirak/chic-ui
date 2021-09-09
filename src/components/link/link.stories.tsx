import React from 'react';
import { Story, Meta } from '@storybook/react';

import Link, { LinkProps } from '.';

export default {
  title: 'Components/Link',
  component: Link,
} as Meta;

const Template: Story<LinkProps> = (args) => <Link {...args} />;

export const Default = Template.bind({});
Default.args = {
  children: 'Link',
  href: '#',
};

export const CustomElement = Template.bind({});
CustomElement.args = {
  children: 'I am span',
  href: '#',
  as: 'span',
};

export const Disabled = Template.bind({});
Disabled.args = {
  children: 'Disabled link',
  href: '#',
  disabled: true,
};
