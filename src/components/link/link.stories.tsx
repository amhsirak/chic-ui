import React from 'react';
import { Story, Meta } from '@storybook/react';

import Link, { LinkProps } from '.';
import { theme } from '../../tokens/themes';

export default {
  title: 'Components/Link',
  component: Link,
  argTypes: {
    type: {
      options: Object.keys(theme),
      control: { type: 'select' }
    }
  }
} as Meta;

const Template: Story<LinkProps> = (args) => <Link {...args} />;

export const Default = Template.bind({});
Default.args = {
  children: 'Link',
  href: 'https://facebook.com'
};

export const CustomElement = Template.bind({});
CustomElement.args = {
  children: 'I am span',
  href: '#',
  as: 'span',
  type: 'primary'
};

export const Disabled = Template.bind({});
Disabled.args = {
  children: 'Disabled link',
  href: '#',
  disabled: true
};
