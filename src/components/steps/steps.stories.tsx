import React from 'react';
import { Meta, Story } from '@storybook/react';
import { useArgs } from '@storybook/client-api';
import Steps, { StepsProps } from '.';
import { theme } from '../../tokens/themes';
import SvgCross from '../../icons/Cross';

export default {
  title: 'Components/Steps',
  component: Steps,
  argTypes: {
    type: {
      options: Object.keys(theme),
      control: { type: 'radio' }
    },
    direction: {
      options: ['horizontal', 'vertical'],
      control: { type: 'radio' }
    }
  }
} as Meta;

const { Step } = Steps;

const Template: Story<StepsProps> = ({ ...args }) => {
  return (
    <Steps {...args}>
      <Step title="Step One" subTitle="Step one details" />
      <Step title="Step Two" subTitle="Step two details" />
      <Step title="Step Three" subTitle="Step three details" />
      <Step title="Step Four" subTitle="Step four details" />
    </Steps>
  );
};

export const Default = Template.bind({});

Default.args = {
  active: 1,
  type: 'primary',
  direction: 'horizontal',
  responsive: false,
  divider: ''
};

export const Vertical = Template.bind({});
Vertical.args = {
  ...Default.args,
  direction: 'vertical'
};

export const Responsive = Template.bind({});
Responsive.args = {
  ...Default.args,
  responsive: true
};

const InteractiveTemplate: Story<StepsProps> = ({ ...args }) => {
  const [{ active }, updateArgs] = useArgs();
  const onChange = (active: number) => updateArgs({ active });
  return (
    <>
      <h3 style={{ textAlign: 'center', marginBottom: '1rem' }}>
        Click on icon to change step
      </h3>
      <Steps {...args} active={active} onChange={onChange}>
        <Step title="Step One" subTitle="Step one details" />
        <Step title="Step Two" subTitle="Step two details" />
        <Step title="Step Three" subTitle="Step three details" />
        <Step title="Step Four" subTitle="Step four details" />
      </Steps>
    </>
  );
};

export const Interactive = InteractiveTemplate.bind({});

Interactive.args = {
  ...Default.args
};

const CustomIconTemplate: Story<StepsProps> = ({ ...args }) => {
  return (
    <Steps {...args}>
      <Step
        icon={
          <SvgCross
            style={{
              height: '32px',
              width: '32px',
              padding: '0.5rem',
              background: 'darkseagreen'
            }}
          />
        }
        title="Step One"
        subTitle="Step one details"
      />
      <Step title="Step Two" subTitle="Step two details" />
      <Step title="Step Three" subTitle="Step three details" />
      <Step title="Step Four" subTitle="Step four details" />
    </Steps>
  );
};

export const CustomIcon = CustomIconTemplate.bind({});

CustomIcon.args = {
  ...Default.args
};
