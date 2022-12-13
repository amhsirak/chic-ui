import React, { useState } from 'react';
import { Story, Meta } from '@storybook/react';
import TextInput, { TextInputProps } from '.';
import SearchIcon from '../../icons/Search';

export default {
  title: 'Components/TextInput',
  component: TextInput
} as Meta;

const Template: Story<TextInputProps> = (args) => <TextInput {...args} />;

export const Default = Template.bind({});
Default.args = {
  width: '400px',
  bordered: true,
  size: 'small'
};

export const CharacterCounting = Template.bind({});
CharacterCounting.args = {
  width: '400px',
  bordered: false,
  size: 'small',
  maxLength: 40
};

export const Password = Template.bind({});
Password.args = {
  width: '400px',
  bordered: true,
  size: 'small',
  type: 'password'
};

export const Placeholder = Template.bind({});
Placeholder.args = {
  placeholder: 'Placeholder',
  width: '400px',
  bordered: true
};

export const WithIcon = Template.bind({});
WithIcon.args = {
  placeholder: 'Search Something...',
  icon: SearchIcon,
  width: '400px',
  bordered: true
};

export const WithError = Template.bind({});
WithError.args = {
  placeholder: 'Wrong input',
  width: '400px',
  error: true
};

export const Disabled = Template.bind({});
Disabled.args = {
  placeholder: 'Disabled',
  width: '400px',
  disabled: true
};

export const ReadOnly = Template.bind({});
ReadOnly.args = {
  placeholder: 'Not editable',
  width: '400px',
  readonly: true
};

export const Clearable = () => {
  const [value, setValue] = useState('');

  return (
    <TextInput
      placeholder="Type and clear"
      width="400px"
      value={value}
      onChange={(e: any) => setValue(e.currentTarget.value)}
      clearable
    />
  );
};

export const Sizes = () => {
  return (
    <>
      <TextInput placeholder="large" size="large" />
      <br />
      <TextInput placeholder="default" size="default" />
      <br />
      <TextInput placeholder="small" size="small" />
    </>
  );
};
