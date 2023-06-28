import React, { useState } from 'react';
import { StoryFn, Meta } from '@storybook/react';
import TextInput, { TextInputProps } from '.';
import SearchIcon from '../../icons/Search';

export default {
  title: 'Components/TextInput',
  component: TextInput
} as Meta;

const Template: StoryFn<TextInputProps> = (args) => <TextInput {...args} />;

export const Default = Template.bind({});
Default.args = {
  width: '900px'
};

export const Placeholder = Template.bind({});
Placeholder.args = {
  placeholder: 'Placeholder',
  width: '700px'
};

export const WithIcon = Template.bind({});
WithIcon.args = {
  placeholder: 'Search Something...',
  icon: SearchIcon,
  width: '500px'
};

export const WithError = Template.bind({});
WithError.args = {
  placeholder: 'Wrong input',
  width: '500px',
  error: true
};

export const Disabled = Template.bind({});
Disabled.args = {
  placeholder: 'Disabled',
  width: '500px',
  disabled: true
};

export const ReadOnly = Template.bind({});
ReadOnly.args = {
  placeholder: 'Not editable',
  width: '500px',
  readonly: true
};

export const Clearable = () => {
  const [value, setValue] = useState('');

  return (
    <TextInput
      placeholder="Type and clear"
      width="500px"
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
