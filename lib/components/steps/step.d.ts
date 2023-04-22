import React, { ReactNode } from 'react';
import { themeType } from '../../tokens/themes';
type stepsDirection = 'horizontal' | 'vertical';
interface StepProps {
    type?: themeType;
    disabled?: boolean;
    icon?: ReactNode;
    title?: ReactNode;
    subTitle?: ReactNode;
    index?: number;
    activeIndex?: number;
    length?: number;
    onChange?: (active: number) => void;
    divider?: ReactNode;
    direction?: stepsDirection;
}
declare const _default: React.ForwardRefExoticComponent<StepProps & React.RefAttributes<HTMLLIElement>>;
export default _default;
//# sourceMappingURL=step.d.ts.map