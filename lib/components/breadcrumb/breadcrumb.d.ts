import React, { ReactNode } from 'react';
import type { themeType } from 'src/tokens/themes';
interface BaseBreadcrumbProps {
    className?: string;
    separator?: ReactNode | string;
    style?: React.CSSProperties;
    type?: themeType;
}
declare const Breadcrumb: React.FC<BreadcrumbProps>;
export default Breadcrumb;
export type BreadcrumbProps = BaseBreadcrumbProps;
//# sourceMappingURL=breadcrumb.d.ts.map