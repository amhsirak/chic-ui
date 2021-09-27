import { Story, Meta } from '@storybook/react/types-6-0';
import styled from 'styled-components';
import Button, { ButtonProps } from '.';
import SearchIcon from '../../icons/Search';

export default {
  title: 'Components/Button',
  component: Button,
} as Meta;

const Template: Story<ButtonProps> = (args) => <Button {...args} />;


export const Disabled = Template.bind({});
Disabled.args = {
  children: 'Disabled Button',
  disabled: true
};

export const Loading = Template.bind({});
Loading.args = {
  children: 'Button',
  loading: true,
};

export const WithIcon = Template.bind({});
WithIcon.args = {
  icon: SearchIcon,
  type: 'light',
  children: 'Search',
};


const ButtonRow = styled.div `
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
    <ButtonRow>
      <Button size='extraLarge'>Extra Large</Button>
      <Button size='large'>Large</Button>
      <Button size='default'>Default</Button>
      <Button size='small'>Small</Button>
    </ButtonRow>
    <ButtonRow>
      <Button>Default</Button>
      <Button type='secondary'>Secondary</Button>
      <Button type='warning'>Warning</Button>
      <Button type='success'>Success</Button>
      <Button type='danger'>Danger</Button>
      <Button type='light'>Light</Button>
    </ButtonRow>
    <ButtonRow>
        {/* "Note: The default color of spinner is Light" */}
        <Button loading type='secondary' size='default'>Default</Button>
      <Button disabled>Disabled</Button>
    </ButtonRow>
      </>
  );
};