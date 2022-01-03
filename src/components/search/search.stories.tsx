import React, { useState } from 'react';
import { Meta } from '@storybook/react';
import Search from '.';

export default {
  title: 'Components/Search',
  component: Search
} as Meta;

export const Default = () => {
  const [value, setValue] = useState('');

  return (
    <Search
      placeholder="Search something..."
      value={value}
      onChange={(e) => setValue(e.currentTarget.value)}
    />
  );
};
