import { Story, Meta } from '@storybook/react';
import Card, { StyledCardProps } from '.';
import CardGroup from '../cardgroup';

export default {
  title: 'Components/Card',
  component: Card
} as Meta;

const Template: Story<StyledCardProps> = (args) => <Card {...args} />;

export const Default = Template.bind({});
Default.args = {
  href: 'https://www.youtube.com/',
  type: 'secondary',
  hrefText: 'Visit  site',
  title: 'Title',
  subTitle: 'Sub Title',
  footer: 'Footer',
  description:
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod.'
};

export const Cards = () => {
  return (
    <CardGroup>
      <Card
        type="success"
        title="Meet Green Kitty"
        src="chic_copy.png"
        subTitle="By Chic UI"
        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod.Lorem ipsum dolor sit amet, consectetur adipiscing elit"
        footer="Written on 22/12/2021"
      />

      <Card
        type="secondary"
        title="Facts About Cats"
        src="chic_copy.png"
        subTitle="By Chic UI"
        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod."
        footer="Written on 22/12/2021"
      />

      <Card
        type="danger"
        title="Cat Cat Cat!"
        src="chic_copy.png"
        subTitle="By Chic UI"
        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod"
        footer="Written on 22/12/2021"
      />
    </CardGroup>
  );
};
