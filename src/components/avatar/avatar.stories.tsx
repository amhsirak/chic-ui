import { Story, Meta } from '@storybook/react/types-6-0';
import styled from 'styled-components';
import Avatar, { AvatarProps } from '.';

export default {
  title: 'Components/Avatar',
  component: Avatar,
} as Meta;

const Template: Story<AvatarProps> = (args) => <Avatar {...args} />;

export const Default = Template.bind({});
Default.args = {
    src: 'https://images.theconversation.com/files/350865/original/file-20200803-24-50u91u.jpg?ixlib=rb-1.1.0&q=45&auto=format&w=1200&h=1200.0&fit=crop',
    isActive: true
}

export const Name = Template.bind({});
Name.args = {
    name: 'KS',
    isActive: true
}