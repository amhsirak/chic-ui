import React, { useState, useCallback } from 'react';
import { StoryFn, Meta } from '@storybook/react';
import { theme } from '../../tokens/themes';
import Alert, { AlertProps } from '.';

type Arguments = AlertProps & {
  content: string;
};

function useAlert(initial: boolean): [boolean, () => void] {
  const [show, setShow] = useState(initial);

  const onClick = useCallback(() => {
    setShow((prev) => !prev);
  }, []);

  return [show, onClick];
}
export const Playground: StoryFn<Arguments> = () => {
  const [show, onClick] = useAlert(true);
  return (
    <Alert
      title={'Title'}
      message={'message'}
      dismissible
      type="primary"
      show={show}
      onClose={onClick}
    />
  );
};
Playground.argTypes = {
  type: {
    description: 'Color scheme',
    control: { options: Object.keys(theme), type: 'select' }
  }
};

Playground.args = {
  dismissible: true
};

export default {
  title: 'Components/Alert',
  component: Alert
} as Meta;

export const All = () => {
  return (
    <>
      <Alert title={'Title'} message={'message'}></Alert>
      <Alert type="secondary" title={'Title'} message={'message'}></Alert>
      <Alert type="warning" title={'Title'} message={'message'}></Alert>
      <Alert type="success" title={'Title'} message={'message'}></Alert>
      <Alert type="danger" title={'Title'} message={'message'}></Alert>
      <Alert type="info" title={'Title'} message={'message'}></Alert>
      <Alert type="light" title={'Title'} message={'message'}></Alert>
    </>
  );
};
