import { Story, Meta } from '@storybook/react/types-6-0';
import styled from 'styled-components';
import Button, { ButtonProps } from '.';

export default {
  title: 'Components/Button',
  component: Button,
} as Meta;

const Template: Story<ButtonProps> = (args) => <Button {...args} />;

export const Default = Template.bind({});
Default.args = {
    children: 'Default Button'
}

export const SecondaryButton = Template.bind({});
SecondaryButton.args = {
  children: 'Secondary Button',
  type: 'secondary',
};

export const DangerButton = Template.bind({});
DangerButton.args = {
  children: 'Danger Button',
  type: 'danger',
};

export const HiddenButton = Template.bind({});
HiddenButton.args = {
  children: 'Hidden Button',
  type: 'hidden',
};