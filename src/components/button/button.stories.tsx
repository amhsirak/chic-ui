import { Story, Meta } from '@storybook/react/types-6-0';
import styled from 'styled-components';
import Button, { ButtonProps } from '.';

export default {
  title: 'Components/Button',
  component: Button,
} as Meta;

const Template: Story<ButtonProps> = (args) => <Button {...args} />;

export const Default = Template.bind({});
Default.args = {
    children: 'Default Button'
}

export const SecondaryButton = Template.bind({});
SecondaryButton.args = {
  children: 'Secondary Button',
  type: 'secondary',
};

export const DangerButton = Template.bind({});
DangerButton.args = {
  children: 'Danger Button',
  type: 'danger',
};

export const HiddenButton = Template.bind({});
HiddenButton.args = {
  children: 'Hidden Button',
  type: 'hidden',
};

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
        <Button type='secondary' size='extraLarge'>Extra Large</Button>
        <Button type='secondary' size='large'>Large</Button>
        <Button type='secondary' size='default'>Default</Button>
        <Button type='secondary' size='small'>Small</Button>
      </ButtonRow>
      <ButtonRow>
        <Button type='danger' size='extraLarge'>Extra Large</Button>
        <Button type='danger' size='large'>Large</Button>
        <Button type='danger' size='default'>Default</Button>
        <Button type='danger' size='small'>Small</Button>
      </ButtonRow>
      <ButtonRow>
        <Button type='hidden' size='extraLarge'>Extra Large</Button>
        <Button type='hidden' size='large'>Large</Button>
        <Button type='hidden' size='default'>Default</Button>
        <Button type='hidden' size='small'>Small</Button>
      </ButtonRow>
      <ButtonRow>
        <Button disabled size='extraLarge'>Extra Large</Button>
        <Button disabled size='large'>Large</Button>
        <Button disabled size='default'>Default</Button>
        <Button disabled size='small'>Small</Button>
      </ButtonRow>
      <ButtonRow>
        <Button loading size='extraLarge'>Extra Large</Button>
        <Button loading size='large'>Large</Button>
        <Button loading size='default'>Default</Button>
        <Button loading size='small'>Small</Button>
      </ButtonRow>
      </>
  );
};