import { Meta } from "@storybook/react/types-6-0";
import React from "react";
import Tooltip from '.';

export default {
    title: 'Components/Tooltip',
    component: Tooltip
} as Meta

export const Default = () => {
    return (
        <div>
        <Tooltip placement="top" content={'Tooltip top'}></Tooltip>
        <Tooltip placement="left" content={'Tooltip left'}></Tooltip>
        <Tooltip placement="bottom" content={'Tooltip bottom'}></Tooltip>
        <Tooltip placement="right" content={'Tooltip right'}></Tooltip>
        </div>
    )
}