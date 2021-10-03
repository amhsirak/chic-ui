import React from "react";
import { Meta, Story } from "@storybook/react";
import Slider, { SliderProps } from ".";

export default {
  title: "Components/Slider",
  component: Slider,
  argTypes: {
    type: {
      options: ["default", "secondary", "danger", "warning", "light"],
      control: { type: "radio" },
    },
    disabled: {
      control: { type: "boolean" },
    },
    min: {
      control: { type: "number" },
    },
    max: {
      control: { type: "number" },
    },
    step: {
      control: { type: "number" },
    },
    value: {
      control: { type: "number" },
    },
  },
} as Meta;

const Template: Story<SliderProps> = (args) => <Slider min={0} max={100} step={10} {...args} />;

export const Default = Template.bind({});
Default.args = {
  type: "default",
  disabled: false,
  min: 0,
  max: 100,
  step: 1,
};

export const WithValue = Template.bind({});
WithValue.args = {
  type: "warning",
  disabled: false,
  min: 0,
  max: 100,
  step: 1,
  value: 70,
};

export const Disabled = Template.bind({});
Disabled.args = {
  type: "warning",
  disabled: true,
  min: 0,
  max: 100,
  step: 1,
};
