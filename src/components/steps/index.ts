import React from 'react';
import Step from './step';
import InternalSteps, { StepsProps } from './steps';

export * from './steps';
export * from './step';

interface CompoundedStep
  extends React.ForwardRefExoticComponent<
    StepsProps & React.RefAttributes<HTMLDivElement>
  > {
  Step: typeof Step;
}

const Steps = InternalSteps as CompoundedStep;

Steps.Step = Step;

export default Steps;
