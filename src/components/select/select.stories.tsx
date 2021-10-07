import { Meta, Story } from '@storybook/react';
import React, { useState } from 'react';
import Select, { SelectProps } from '.';

export default {
  title: 'Components/Select',
  component: Select
} as Meta;

const Template: Story<SelectProps<string[]>> = (args) => {
  const [value, setValue] = useState('');
  const data = ['India', 'Mexico', 'Australia', 'Germany'];

  return (
    <>
      <div>Result: {value}</div>
      <Select {...args} data={data} onChange={(value) => setValue(value)} />
    </>
  );
};

export const Default = Template.bind({});
Default.args = {
  width: '200px',
  placeholder: 'Select a country'
};

export const Disabled = Template.bind({});
Disabled.args = {
  width: '200px',
  placeholder: 'Select a country',
  disabled: true
};

export const Error = Template.bind({});
Error.args = {
  width: '200px',
  placeholder: 'Select a country',
  error: true
};

export const SimpleMultiSelect = Template.bind({});
SimpleMultiSelect.args = {
  width: '400px',
  placeholder: 'Select a country',
  multiSelect: true
};

export const ComplexObject = () => {
  const [value, setValue] = useState({});
  const data = [
    { id: 1, game: 'hockey' },
    { id: 2, game: 'football' },
    { id: 3, game: 'running' }
  ];

  return (
    <>
      <div>Result: {JSON.stringify(value)}</div>
      <Select
        width="200px"
        data={data}
        dataKey="id"
        dataName="game"
        placeholder="Select a Sport"
        onChange={(value) => setValue(value)}
      />
    </>
  );
};

export const ComplexObjectMultiSelect = () => {
  const [value, setValue] = useState({});
  const data = [
    { id: 1, game: 'hockey' },
    { id: 2, game: 'football' },
    { id: 3, game: 'running' }
  ];

  return (
    <>
      <div>Result: {JSON.stringify(value)}</div>
      <Select
        width="200px"
        data={data}
        dataKey="id"
        dataName="game"
        placeholder="Select a Sport"
        multiSelect={true}
        onChange={(value) => setValue(value)}
      />
    </>
  );
};
