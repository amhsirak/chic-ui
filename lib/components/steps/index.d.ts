import React from 'react';
import Step from './step';
import { StepsProps } from './steps';
export * from './steps';
export * from './step';
interface CompoundedStep extends React.ForwardRefExoticComponent<StepsProps & React.RefAttributes<HTMLDivElement>> {
    Step: typeof Step;
}
declare const Steps: CompoundedStep;
export default Steps;
//# sourceMappingURL=index.d.ts.map