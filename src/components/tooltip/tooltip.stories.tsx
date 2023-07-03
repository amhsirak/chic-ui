import { Meta } from '@storybook/react';
import React from 'react';
import Tooltip from '.';

export default {
  title: 'Components/Tooltip',
  component: Tooltip
} as Meta;

export const Default = () => {
  return (
    <div>
      <div>
        <Tooltip placement="top" content={'Tooltip top'}></Tooltip>
        <Tooltip placement="left" content={'Tooltip left'}></Tooltip>
        <Tooltip placement="bottom" content={'Tooltip bottom'}></Tooltip>
        <Tooltip placement="right" content={'Tooltip right'}></Tooltip>
      </div>
      <div>
        <Tooltip
          placement="top"
          type="secondary"
          content={'Tooltip top'}
        ></Tooltip>
        <Tooltip
          placement="left"
          type="secondary"
          content={'Tooltip left'}
        ></Tooltip>
        <Tooltip
          placement="bottom"
          type="secondary"
          content={'Tooltip bottom'}
        ></Tooltip>
        <Tooltip
          placement="right"
          type="secondary"
          content={'Tooltip right'}
        ></Tooltip>
      </div>
      <div>
        <Tooltip
          placement="top"
          type="danger"
          content={'Tooltip top'}
        ></Tooltip>
        <Tooltip
          placement="left"
          type="danger"
          content={'Tooltip left'}
        ></Tooltip>
        <Tooltip
          placement="bottom"
          type="danger"
          content={'Tooltip bottom'}
        ></Tooltip>
        <Tooltip
          placement="right"
          type="danger"
          content={'Tooltip right'}
        ></Tooltip>
      </div>
      <div>
        <Tooltip
          placement="top"
          type="warning"
          content={'Tooltip top'}
        ></Tooltip>
        <Tooltip
          placement="left"
          type="warning"
          content={'Tooltip left'}
        ></Tooltip>
        <Tooltip
          placement="bottom"
          type="warning"
          content={'Tooltip bottom'}
        ></Tooltip>
        <Tooltip
          placement="right"
          type="warning"
          content={'Tooltip right'}
        ></Tooltip>
      </div>
      <div>
        <Tooltip
          placement="top"
          type="success"
          content={'Tooltip top'}
        ></Tooltip>
        <Tooltip
          placement="left"
          type="success"
          content={'Tooltip left'}
        ></Tooltip>
        <Tooltip
          placement="bottom"
          type="success"
          content={'Tooltip bottom'}
        ></Tooltip>
        <Tooltip
          placement="right"
          type="success"
          content={'Tooltip right'}
        ></Tooltip>
      </div>
      <div>
        <Tooltip placement="top" type="info" content={'Tooltip top'}></Tooltip>
        <Tooltip
          placement="left"
          type="info"
          content={'Tooltip left'}
        ></Tooltip>
        <Tooltip
          placement="bottom"
          type="info"
          content={'Tooltip bottom'}
        ></Tooltip>
        <Tooltip
          placement="right"
          type="info"
          content={'Tooltip right'}
        ></Tooltip>
      </div>
      <div>
        <Tooltip placement="top" type="light" content={'Tooltip top'}></Tooltip>
        <Tooltip
          placement="left"
          type="light"
          content={'Tooltip left'}
        ></Tooltip>
        <Tooltip
          placement="bottom"
          type="light"
          content={'Tooltip bottom'}
        ></Tooltip>
        <Tooltip
          placement="right"
          type="light"
          content={'Tooltip right'}
        ></Tooltip>
      </div>
    </div>
  );
};
