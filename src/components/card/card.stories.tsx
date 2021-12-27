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
        src="https://cdn.mos.cms.futurecdn.net/VSy6kJDNq2pSXsCzb6cvYF-1200-80.jpg"
        subTitle="By Chic UI"
        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod.Lorem ipsum dolor sit amet, consectetur adipiscing elit"
        footer='Written on 22/12/2021'
      />

      <Card
        type="secondary"
        title="Facts About Cats"
        src="https://www.washingtonian.com/wp-content/uploads/2020/03/sandie-clarke-C8uGiOanMY4-unsplash-2048x1365.jpg"
        subTitle="By Chic UI"
        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod."
        footer='Written on 22/12/2021'
      />

      <Card
        type="danger"
        title="Cat Cat Cat!"
        src="https://images.unsplash.com/photo-1478098711619-5ab0b478d6e6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8MTN8fHxlbnwwfHx8fA%3D%3D&w=1000&q=80"
        subTitle="By Chic UI"
        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod"
        footer='Written on 22/12/2021'
      />
    </CardGroup>
  );
};
