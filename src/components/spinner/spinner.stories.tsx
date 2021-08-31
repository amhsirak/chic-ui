import { Story, Meta } from '@storybook/react';
import styled from 'styled-components';
import Spinner, { SpinnerProps } from '.';

export default {
    title: 'Components/Spinner',
    component: Spinner,
} as Meta;

const Template: Story<SpinnerProps> = (args) => <Spinner {...args} />;

export const Default = Template.bind({});
Default.args = {
    size: 50
}

const DarkBackground  = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 50px;
    height: 50px;
    background-color: #000000;
`;

export const Light = () => (
    <DarkBackground>
        <Spinner size={50} light />
    </DarkBackground>
)
