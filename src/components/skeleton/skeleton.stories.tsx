import { Story, Meta } from '@storybook/react';
import Skeleton, { SkeletonProps } from '.';

export default {
  title: 'Components/Skeleton',
  component: Skeleton
} as Meta;

const Template: Story<SkeletonProps> = (args) => <Skeleton {...args} />;

export const Default = Template.bind({});
Default.args = {
  width: 150,
  height: 150
};

export const BorderRadius = Template.bind({});
BorderRadius.args = {
  width: 150,
  height: 150,
  borderRadius: '50%'
};
