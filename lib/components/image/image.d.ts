import React from 'react';
export interface ImageProps {
    width?: string;
    height?: string;
    className?: string;
    rounded?: boolean;
    circle?: boolean;
    outline?: boolean;
    src: string;
}
export declare const Image: React.ForwardRefRenderFunction<HTMLImageElement, ImageProps>;
declare const _default: React.ForwardRefExoticComponent<ImageProps & React.RefAttributes<HTMLImageElement>>;
export default _default;
//# sourceMappingURL=image.d.ts.map