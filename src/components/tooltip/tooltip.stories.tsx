import { Meta, Story } from '@storybook/react';
import Tooltip, { TooltipProps } from './tooltip';
export default {
  title: 'Components/Tooltip',
  component: Tooltip,
  argTypes: {
    position: {
      options: ['top', 'right', 'bottom', 'left'],
      control: { type: 'radio' }
    },
    bg: {
      control: {
        type: 'color'
      }
    },
    arrowColor: {
      control: {
        type: 'color'
      }
    }
  },
  args: {
    bg: 'black',
    children: (
      <p style={{ color: 'white' }}>
        Tooltip with{' '}
        <a style={{ color: 'white' }} href="/">
          html
        </a>
      </p>
    ),
    arrowColor: 'black',
    position: 'top'
  }
} as Meta;

const Template: Story<TooltipProps> = (args) => <Tooltip {...args} />;

export const Top = Template.bind({});
export const Right = Template.bind({});
export const Bottom = Template.bind({});
export const Left = Template.bind({});
export const Big = Template.bind({});

Top.args = {
  position: 'top'
};

Right.args = {
  position: 'right'
};

Bottom.args = {
  position: 'bottom'
};

Left.args = {
  position: 'left'
};

Big.args = {
  children: <div style={{ width: '400px', height: '200px' }}></div>,
  arrowColor: '#E5E5E5',
  bg: '#E5E5E5'
};
