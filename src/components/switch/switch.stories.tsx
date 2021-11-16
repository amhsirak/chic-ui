import { Meta } from '@storybook/react/types-6-0';
import Switch from './switch';
import React, { useCallback, useState } from 'react';
import styled from 'styled-components';

export default {
  title: 'Components/Switch',
  component: Switch
} as Meta;

const SwitchRow = styled.div`
  display: flex;
  flex-direction: row;
  align-items: stretch;

  & > * {
    margin-left: 8px;
  }
`;

const LabeledSwitch = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;

  & > * + * {
    margin-top: 8px;
  }
`;

const SwitchLabel = styled.p``;

const SectionHeader = styled.h4`
  margin-top: 8px;
  margin-bottom: 4px;
`;

function useSwitch(initial: boolean): [boolean, () => void] {
  const [checked, setChecked] = useState(initial);

  const onChange = useCallback(() => {
    setChecked((prev) => !prev);
  }, []);

  return [checked, onChange];
}

export const Sizes = () => {
  const [checked, onChange] = useSwitch(true);

  return (
    <>
      <SectionHeader>Sizes</SectionHeader>
      <SwitchRow>
        <LabeledSwitch>
          <Switch checked={checked} onChange={onChange} size="large" />
          <SwitchLabel>large</SwitchLabel>
        </LabeledSwitch>
        <LabeledSwitch>
          <Switch checked={checked} onChange={onChange} size="default" />
          <SwitchLabel>default</SwitchLabel>
        </LabeledSwitch>
        <LabeledSwitch>
          <Switch checked={checked} onChange={onChange} size="small" />
          <SwitchLabel>small</SwitchLabel>
        </LabeledSwitch>
      </SwitchRow>
    </>
  );
};

export const Types = () => {
  const [checked, onChange] = useSwitch(true);

  return (
    <>
      <SectionHeader>Types</SectionHeader>
      <SwitchRow>
        <LabeledSwitch>
          <Switch checked={checked} onChange={onChange} type={'default'} />
          <SwitchLabel>default</SwitchLabel>
        </LabeledSwitch>
        <LabeledSwitch>
          <Switch checked={checked} onChange={onChange} type={'success'} />
          <SwitchLabel>success</SwitchLabel>
        </LabeledSwitch>
        <LabeledSwitch>
          <Switch checked={checked} onChange={onChange} type={'secondary'} />
          <SwitchLabel>secondary</SwitchLabel>
        </LabeledSwitch>
        <LabeledSwitch>
          <Switch checked={checked} onChange={onChange} type={'warning'} />
          <SwitchLabel>warning</SwitchLabel>
        </LabeledSwitch>
        <LabeledSwitch>
          <Switch checked={checked} onChange={onChange} type={'danger'} />
          <SwitchLabel>danger</SwitchLabel>
        </LabeledSwitch>
      </SwitchRow>
    </>
  );
};

export const Paddings = () => {
  const [checked, onChange] = useSwitch(true);

  return (
    <>
      <SectionHeader>Paddings</SectionHeader>
      <SwitchRow>
        <LabeledSwitch>
          <Switch checked={checked} onChange={onChange} padding={'small'} />
          <SwitchLabel>small</SwitchLabel>
        </LabeledSwitch>
        <LabeledSwitch>
          <Switch checked={checked} onChange={onChange} padding={'default'} />
          <SwitchLabel>default</SwitchLabel>
        </LabeledSwitch>
        <LabeledSwitch>
          <Switch checked={checked} onChange={onChange} padding={'large'} />
          <SwitchLabel>large</SwitchLabel>
        </LabeledSwitch>
      </SwitchRow>
    </>
  );
};

export const All = () => {
  const [checked, onChange] = useSwitch(true);
  return (
    <>
      <SectionHeader>Types</SectionHeader>
      <SwitchRow>
        <LabeledSwitch>
          <Switch checked={checked} onChange={onChange} type={'default'} />
          <SwitchLabel>default</SwitchLabel>
        </LabeledSwitch>
        <LabeledSwitch>
          <Switch checked={checked} onChange={onChange} type={'success'} />
          <SwitchLabel>success</SwitchLabel>
        </LabeledSwitch>
        <LabeledSwitch>
          <Switch checked={checked} onChange={onChange} type={'secondary'} />
          <SwitchLabel>secondary</SwitchLabel>
        </LabeledSwitch>
        <LabeledSwitch>
          <Switch checked={checked} onChange={onChange} type={'warning'} />
          <SwitchLabel>warning</SwitchLabel>
        </LabeledSwitch>
        <LabeledSwitch>
          <Switch checked={checked} onChange={onChange} type={'danger'} />
          <SwitchLabel>danger</SwitchLabel>
        </LabeledSwitch>
      </SwitchRow>
      <SectionHeader>Sizes</SectionHeader>
      <SwitchRow>
        <LabeledSwitch>
          <Switch checked={checked} onChange={onChange} size="large" />
          <SwitchLabel>large</SwitchLabel>
        </LabeledSwitch>
        <LabeledSwitch>
          <Switch checked={checked} onChange={onChange} size="default" />
          <SwitchLabel>default</SwitchLabel>
        </LabeledSwitch>
        <LabeledSwitch>
          <Switch checked={checked} onChange={onChange} size="small" />
          <SwitchLabel>small</SwitchLabel>
        </LabeledSwitch>
      </SwitchRow>
      <SectionHeader>Padding</SectionHeader>
      <SwitchRow>
        <LabeledSwitch>
          <Switch checked={checked} onChange={onChange} padding={'small'} />
          <SwitchLabel>small</SwitchLabel>
        </LabeledSwitch>
        <LabeledSwitch>
          <Switch checked={checked} onChange={onChange} padding={'default'} />
          <SwitchLabel>default</SwitchLabel>
        </LabeledSwitch>
        <LabeledSwitch>
          <Switch checked={checked} onChange={onChange} padding={'large'} />
          <SwitchLabel>large</SwitchLabel>
        </LabeledSwitch>
      </SwitchRow>
      <SectionHeader>Disabled</SectionHeader>
      <SwitchRow>
        <Switch checked={checked} onChange={onChange} disabled />
      </SwitchRow>
    </>
  );
};
