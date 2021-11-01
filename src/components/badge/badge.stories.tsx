import { Meta, Story } from '@storybook/react';
import styled from 'styled-components';

import Badge, {BadgeProps} from '.';

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

export const Playground: Story<Arguments> = ({ offsetX, offsetY, ...args }) => {
  const offset: BadgeProps['offset'] = [offsetX, offsetY];

  return (
    <Badge offset={offset} {...args}>
      <Box />
    </Badge>
  );
};

Playground.args = {
  count: 3,
  limit: 99,
  type: 'default',
  showCount: true,
  showZero: false,
  offsetX: 0,
  offsetY: 0
};

export default {
  title: 'Components/Badge',
  component: Badge
} as Meta;
