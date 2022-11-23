import { Meta } from '@storybook/react/types-6-0';
import React from 'react';
import styled from 'styled-components';
import Button from '.';
import SearchIcon from '../../icons/Search';

export default {
  title: 'Components/Button',
  component: Button
} as Meta;

const ButtonRow = styled.div`
  display: flex;
  align-items: flex-start;
  margin-bottom: 12px;
  & > * {
    margin-right: 12px;
  }
`;

export const Sizes = () => {
  return (
    <React.Fragment>
      <ButtonRow>
        <Button size="large">Large</Button>
        <Button size="default">Default</Button>
        <Button size="small">Small</Button>
      </ButtonRow>
      <ButtonRow>
        <Button>Primary</Button>
        <Button type="secondary">Secondary</Button>
        <Button type="warning">Warning</Button>
        <Button type="success">Success</Button>
        <Button type="danger">Danger</Button>
        <Button type="info">Info</Button>
        <Button type="light">Light</Button>
      </ButtonRow>
      <ButtonRow>
        {/* "Note: The default color of spinner is Light" */}
        <Button loading type="secondary" />
        <Button loading type="light" />
        <Button disabled>Disabled</Button>
        <Button type="light" icon={SearchIcon}>
          Search
        </Button>
      </ButtonRow>
    </React.Fragment>
  );
};

export const Outline = () => {
  return (
    <React.Fragment>
      <ButtonRow>
        <Button outline>Primary</Button>
        <Button outline type="secondary">
          Secondary
        </Button>
        <Button outline type="warning">
          Warning
        </Button>
        <Button outline type="success">
          Success
        </Button>
        <Button outline type="danger">
          Danger
        </Button>
        <Button outline type="info">
          Info
        </Button>
        <Button outline type="light">
          Light
        </Button>
      </ButtonRow>
    </React.Fragment>
  );
};
