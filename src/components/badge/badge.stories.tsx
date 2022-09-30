import { Meta, Story } from '@storybook/react';
import styled from 'styled-components';
import { theme } from '../../tokens/themes';

import Badge, { BadgeProps } from '.';

type Arguments = Omit<BadgeProps, 'offset'> & {
  offsetX: number;
  offsetY: number;
};

const Box = styled.div`
  width: 60px;
  height: 60px;
  background: grey;
  border-radius: 4px;
`;

export const Default: Story<Arguments> = ({ offsetX, offsetY, ...args }) => {
  const offset: BadgeProps['offset'] = [offsetX, offsetY];

  return (
    <Badge offset={offset} {...args}>
      <Box />
    </Badge>
  );
};

Default.args = {
  count: 3,
  limit: 99,
  type: 'primary',
  showCount: true,
  showZero: false,
  offsetX: 0,
  offsetY: 0
};

export default {
  title: 'Components/Badge',
  component: Badge,
  argTypes: {
    type: {
      options: Object.keys(theme),
      control: { type: 'radio' }
    }
  }
} as Meta;
