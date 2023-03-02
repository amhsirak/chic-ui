import React from 'react';
import { StyledImage } from './styled';

export interface ImageProps {
  width?: string;
  height?: string;
  className?: string;
  rounded?: boolean;
  circle?: boolean;
  outline?: boolean;
  src: string;
  style?: React.CSSProperties;
}

export const Image: React.ForwardRefRenderFunction<
  HTMLImageElement,
  ImageProps
> = (props, ref) => {
  const {
    width = '100%',
    height = '100%',
    className,
    src,
    rounded = false,
    circle = false,
    outline = false,
    style,
  } = props;

  return (
    <StyledImage
      src={src}
      ref={ref}
      width={width}
      height={height}
      className={className}
      rounded={rounded}
      circle={circle}
      outline={outline}
      style={style}
    />
  );
};

export default React.forwardRef<HTMLImageElement, ImageProps>(Image);
