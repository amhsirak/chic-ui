import { Story, Meta } from '@storybook/react/types-6-0';
import styled from 'styled-components';
import Badge, { BadgeProps } from '.';

export default {
  title: 'Components/Badge',
  component: Badge,
} as Meta;

const Template: Story<BadgeProps> = (args) => <Badge {...args} />;

export const Default = Template.bind({});
Default.args = {
    children: 'Default'
}

const BadgeRow = styled.div `
  display: flex;
  align-items: flex-start;
  margin-bottom: 12px;
  & > * {
    margin-right: 12px;
  }
`;

export const Sizes = () => {
  return (
    <>
    <BadgeRow>
      <Badge size='extraLarge'>Extra Large</Badge>
      <Badge size='large'>Large</Badge>
      <Badge size='default'>Default</Badge>
      <Badge size='small'>Small</Badge>
    </BadgeRow>
    </>
    );
}