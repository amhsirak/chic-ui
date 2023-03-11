import React from 'react';
import { themeType } from '../../tokens/themes';
export interface ProgressBarProps {
    progress?: number;
    type?: themeType;
    showProgress?: boolean;
    animated?: boolean;
    striped?: boolean;
    stripedAnimated?: boolean;
    style?: React.CSSProperties;
    className?: string;
}
declare const _default: React.ForwardRefExoticComponent<ProgressBarProps & React.RefAttributes<HTMLAnchorElement>>;
export default _default;
//# sourceMappingURL=progressBar.d.ts.map