import React, { ReactElement, ReactNode } from 'react';
import { themeType } from '../../tokens/themes';
export type stepsDirection = 'horizontal' | 'vertical';
export interface StepsProps {
    /** Count of step start from 0.*/
    active?: number;
    /** Steps direction */
    direction?: stepsDirection;
    /** Change to vertical direction when screen width smaller than 532px */
    responsive?: boolean;
    onChange?: (active: number) => void;
    /** Theme type for all steps. Can override this with theme of step */
    type?: themeType;
    /** Custom Divider */
    divider?: ReactNode;
    style?: React.CSSProperties;
    children: ReactElement[] | ReactElement;
    className?: string;
}
declare const _default: React.ForwardRefExoticComponent<StepsProps & React.RefAttributes<unknown>>;
export default _default;
//# sourceMappingURL=steps.d.ts.map