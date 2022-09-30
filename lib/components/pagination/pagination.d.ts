import React from 'react';
import { themeType, ThemeValues } from '../../tokens/themes';
export interface PaginationProps {
    pages: number;
    startCountInZero?: boolean;
    whenNextPage: (page: number) => void;
    whenPreviousPage: (page: number) => void;
    whenPageChange: (page: number) => void;
    bgType?: themeType;
    customBg?: ThemeValues;
    activeBg: string;
    activeColor: string;
    activeHoverColor?: string;
}
declare const _default: React.ForwardRefExoticComponent<PaginationProps & React.RefAttributes<HTMLDivElement>>;
export default _default;
//# sourceMappingURL=pagination.d.ts.map