import React from 'react';
import { GlobalStyles } from '../src/config/global.styles';

// Global decorator to apply the styles to all stories
export const decorators = [
  Story => (
    <>
      <GlobalStyles />
      <Story />
    </>
  ),
];

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
}