import React, { ElementType, ReactNode } from 'react';
import { StyledTag } from './styled';

export const TAG_TYPES = [
  'default',
  'secondary',
  'danger',
  'warning',
  'success',
  'light'
] as const;

export type TagType = typeof TAG_TYPES[number];

export interface BaseTagProps {
  type?: string;
  rounded?: boolean;
  className?: string;
  children?: ReactNode;
}

// If `as` is added, tag becomes a custom html node specified in `as`
export type TagProps = {
  as?: ElementType;
  to?: string;
} & BaseTagProps;

const Tag: React.ForwardRefRenderFunction<unknown, TagProps> = (props, ref) => {
  const {
    type = 'default',
    rounded = false,
    className,
    children,
    as,
    to
  } = props;

  const styles = {
    innerType: type,
    withText: children != null,
    rounded
  };

  if (as) {
    return (
      <StyledTag as={as} to={to} ref={ref} className={className} {...styles}>
        {children}
      </StyledTag>
    );
  }

  return (
    <StyledTag
      as={as}
      type="span"
      ref={ref as React.MutableRefObject<HTMLSpanElement>}
      className={className}
      {...styles}
    >
      {children}
    </StyledTag>
  );
};

export default React.forwardRef<unknown, TagProps>(Tag);
