import React, { ElementType, ReactNode } from 'react';
import { StyledTag } from './styled';
import { themeType } from '../../tokens/themes';

export interface BaseTagProps {
  type?: themeType;
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
    type = 'primary',
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
