import React from 'react';
import { Story, Meta } from '@storybook/react';
import { theme } from '../../config/themes';

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

const Template: Story<ProgressBarProps> = (args) => <ProgressBar {...args} />;

export const Default = Template.bind({});
Default.args = {    
  progress:80,
  type:'default',
  showProgress:true,
  animated: false
}




