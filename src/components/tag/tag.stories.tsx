import { Story, Meta } from '@storybook/react/types-6-0';
import { theme } from '../../tokens/themes';
import Tag, { TagProps } from '.';
import Button from '../button';

type Arguments = TagProps & {
  content: string;
};

export const Playground: Story<Arguments> = ({ content, ...args }) => (
  <Tag {...args}>{content}</Tag>
);

Playground.argTypes = {
  type: {
    description: 'Color scheme',
    control: { options: Object.keys(theme), type: 'select' }
  }
};

Playground.args = {
  content: 'Lorem ipsum',
  type: 'primary',
  rounded: false
};

export const WithButton = () => {
  return (
    <>
      <Button type="secondary">
        Total Clicks
        <Tag type="light" rounded>
          199
        </Tag>
      </Button>
    </>
  );
};

export default {
  title: 'Components/Tag',
  component: Tag
} as Meta;
