import { StoryFn } from '@storybook/react';
import React from 'react';
import Accordion, { AccordionProps } from './accordion';

export default {
  title: 'Components/Accordion',
  component: Accordion
};

const Template: StoryFn<AccordionProps> = (args) => <Accordion {...args} />;

export const Default = Template.bind({});
Default.args = {
  header: 'Header 1',
  description:
    'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione molestiae deserunt totam odit recusandae mollitia sit a, accusantium esse quis alias, nulla voluptatibus! Eius hic, perferendis iure mollitia accusamus itaque.'
};
