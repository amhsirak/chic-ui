import { Story, Meta } from '@storybook/react';
import Card, { StyledCardProps } from '.';

export default {
  title: 'Components/Card',
  component: Card
} as Meta;

const Template: Story<StyledCardProps> = (args) => <Card {...args} />;

export const Default = Template.bind({});
Default.args = {
  href: 'https://www.youtube.com/watch?v=3v4UwjXI4Q0&list=RDMM&index=16',
  hrefText: 'Visit the site',
  height: '200px',
  width: '300px',
  title: 'Title',
  subTitle: 'Sub Title',
  footer: 'Footer',
  description:
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
};
