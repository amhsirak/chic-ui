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

export const SecondarySpinner = Template.bind({});
SecondarySpinner.args = {
    size: 50,
    type: 'secondary'
}

export const DangerSpinner = Template.bind({});
DangerSpinner.args = {
    size: 50,
    type: 'danger'
}


export const WarningSpinner = Template.bind({});
WarningSpinner.args = {
    size: 50,
    type: 'warning'
}

export const SuccessSpinner = Template.bind({});
SuccessSpinner.args = {
    size: 50,
    type: 'success'
}

export const LightSpinner = Template.bind({});
LightSpinner.args = {
    size: 50,
    type: 'light'
}
