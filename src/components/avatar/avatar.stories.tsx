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
        <Avatar src="chic_copy.png" />
        <Avatar
          src="chic_copy.png"
          isActive
        />
      </AvatarRow>
      <AvatarRow>
        <Avatar name="KS" />
        <Avatar name="KS" isActive />
      </AvatarRow>
      <Badge type="danger" offset={[-13, 11]} count={3} showCount>
        <Avatar src="chic_copy.png" />
      </Badge>
      <Badge type="success" offset={[-13, 11]} count={0} showZero>
        <Avatar src="chic_copy.png" />
      </Badge>
    </>
  );
};
