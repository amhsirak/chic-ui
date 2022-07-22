import { useFormState } from 'react-final-form';
import Button from '../button';
import React from 'react';

interface SubmitButtonProps {
  children?: React.ReactNode;
};

function SubmitButton({ children }: SubmitButtonProps) {
  const { invalid, submitting } = useFormState();

  return (
    <Button
      loading={submitting}
      disabled={submitting || invalid}
      typeBtn="submit"
    >
      {children}
    </Button>
  );
}

export default SubmitButton;
