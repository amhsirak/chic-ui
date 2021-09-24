import { Story, Meta } from '@storybook/react/types-6-0';
import styled from 'styled-components';
import Badge, { BadgeProps } from '.';

export default {
  title: 'Components/Badge',
  component: Badge,
} as Meta;

const Template: Story<BadgeProps> = (args) => <Badge {...args} />;

export const Default = Template.bind({});
Default.args = {
    children: 'Default Badge'
}

export const Rounded = Template.bind({});
Rounded.args = {
    children: 'Rounded',
    rounded: true
}

