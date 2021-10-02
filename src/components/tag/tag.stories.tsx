import { Story, Meta } from '@storybook/react/types-6-0';
import styled from 'styled-components';
import Tag, { TagProps, TAG_TYPES } from '.';
import Button from '../button';

const TagRow = styled.div`
    display: flex;
    align-items: flex-start;
    margin-bottom: 12px;
    & > * {
        margin-right: 12px;
    }
`;

type Arguments = TagProps & {
    content: string;
};

export const Playground: Story<Arguments> = ({ content, ...args }) => (
    <Tag {...args}>{content}</Tag>
);

Playground.argTypes = {
    type: {
        description: 'Color scheme',
        control: { options: TAG_TYPES, type: 'select' }
    }
};

Playground.args = {
    content: 'Lorem ipsum',
    type: 'default',
    rounded: false
};

export const Sizes = () => {
    return (
        <>
            <TagRow>
                <Tag>Default</Tag>
                <Tag type="secondary">Secondary</Tag>
                <Tag type="danger">Danger</Tag>
                <Tag type="success">Success</Tag>
                <Tag type="warning">Warning</Tag>
                <Tag type="light">Light</Tag>
            </TagRow>
            <TagRow>
                <Tag rounded>Default</Tag>
                <Tag type="secondary" rounded>
                    Secondary
                </Tag>
                <Tag type="danger" rounded>
                    Danger
                </Tag>
                <Tag type="success" rounded>
                    Success
                </Tag>
                <Tag type="warning" rounded>
                    Warning
                </Tag>
                <Tag type="light" rounded>
                    Light
                </Tag>
            </TagRow>
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
