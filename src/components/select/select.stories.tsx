import { Meta } from '@storybook/react';
import React, { useState } from 'react';
import Select from '.';

export default {
  title: 'Components/Select',
  component: Select
} as Meta;

export const Default = () => {
  const [value, setValue] = useState('');
  const data = ['India', 'Mexico', 'Australia', 'Germany'];

  return (
    <>
      <div>Result: {value}</div>
      <Select
        width="400px"
        data={data}
        placeholder="Select a country"
        onChange={(value) => setValue(value)}
      />
    </>
  );
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
        width="400px"
        data={data}
        dataKey="id"
        dataName="game"
        placeholder="Select a Sport"
        onChange={(value) => setValue(value)}
      />
    </>
  );
};
