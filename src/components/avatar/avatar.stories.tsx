import { Meta } from '@storybook/react/types-6-0';
import styled from 'styled-components';
import Avatar from '.';
import Badge from '../badge';

export default {
  title: 'Components/Avatar',
  component: Avatar
} as Meta;

const AvatarRow = styled.div`
  display: flex;
  align-items: flex-start;
  margin-bottom: 12px;
  & > * {
    margin-right: 12px;
  }
`;

export const AllAvatars = () => {
  return (
    <>
      <AvatarRow>
        <Avatar src="https://images.theconversation.com/files/350865/original/file-20200803-24-50u91u.jpg?ixlib=rb-1.1.0&q=45&auto=format&w=1200&h=1200.0&fit=crop" />
        <Avatar
          src="https://images.theconversation.com/files/350865/original/file-20200803-24-50u91u.jpg?ixlib=rb-1.1.0&q=45&auto=format&w=1200&h=1200.0&fit=crop"
          isActive
        />
      </AvatarRow>
      <AvatarRow>
        <Avatar name="KS" />
        <Avatar name="KS" isActive />
      </AvatarRow>
      <Badge type='danger' offset={[-13,11]} count={3} showCount>
        <Avatar src="https://images.theconversation.com/files/350865/original/file-20200803-24-50u91u.jpg?ixlib=rb-1.1.0&q=45&auto=format&w=1200&h=1200.0&fit=crop" />
      </Badge>
      <Badge type='success' offset={[-13,11]} count={0} showZero>
        <Avatar src="https://images.theconversation.com/files/350865/original/file-20200803-24-50u91u.jpg?ixlib=rb-1.1.0&q=45&auto=format&w=1200&h=1200.0&fit=crop" />
      </Badge>
    </>
  );
};
