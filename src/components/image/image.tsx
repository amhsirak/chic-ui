import React from 'react';
import { StyledImage } from './styled';

export interface ImageProps {
    width?: string;
    height?: string;
    className?: string;
    rounded?: boolean;
    circle?: boolean;
    outline?: boolean;
};

export const Image: React.ForwardRefRenderFunction<HTMLImageElement, ImageProps> = (props,ref) => {
    const {
        width = '100%',
        height = '100%',
        className,
        rounded = false,
        circle = false,
        outline = false,
        ...rest
    } = props;

    return (
        <img 
        ref={ref}
        height={height}
        width={width}
        className={className}
        {...rest}
        />
    )
}

export default React.forwardRef<HTMLImageElement, ImageProps>(Image);