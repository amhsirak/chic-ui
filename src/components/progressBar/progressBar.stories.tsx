import React from 'react';
import { StoryFn, Meta } from '@storybook/react';
import { theme } from '../../tokens/themes';

import ProgressBar, { ProgressBarProps } from '.';
import progressBar from './progressBar';

export default {
  title: 'Components/progress-bar',
  component: progressBar,
  argTypes: {
    type: {
      options: Object.keys(theme),
      control: { type: 'radio' }
    }
  }
} as Meta;

const Template: StoryFn<ProgressBarProps> = (args) => <ProgressBar {...args} />;

export const Default = Template.bind({});
Default.args = {
  progress: 80,
  type: 'primary',
  showProgress: true,
  animated: false,
  striped: false,
  stripedAnimated: false
};
