import React from 'react';
import { StyledSkeleton } from './styled';

export interface SkeletonProps {
  width?: number;
  height?: number;
  borderRadius?: string;
  className?: string;
  style?: React.CSSProperties;
}

export const Skeleton: React.ForwardRefRenderFunction<
  HTMLDivElement,
  SkeletonProps
> = (props, ref) => {
  const { width = 100, height = 100, borderRadius = 'none', className, style } = props;

  return (
    <StyledSkeleton
      ref={ref}
      height={height}
      width={width}
      borderRadius={borderRadius}
      className={className}
      style={style}
    />
  );
};

export default React.forwardRef<HTMLDivElement, SkeletonProps>(Skeleton);
