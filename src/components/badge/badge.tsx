import React, { PropsWithChildren } from 'react';
import { Wrapper, StyledBadge } from './styled';
import { themeType } from '../../tokens/themes';

export type BadgeProps = {
  count?: number;
  limit?: number;
  type?: themeType;
  showZero?: boolean;
  showCount?: boolean;
  offset?: [number, number];
};

const Badge: React.ForwardRefRenderFunction<
  HTMLDivElement,
  PropsWithChildren<BadgeProps>
> = (props, ref) => {
  const {
    count = 0,
    limit,
    type = 'primary',
    showCount = false,
    showZero = false,
    offset = [0, 0],
    children
  } = props;

  const isBadgeVisible = count !== 0 || showZero;
  const displayCount = limit && count > limit ? `${limit}+` : count;

  return (
    <Wrapper ref={ref}>
      <>
        {children}
        {isBadgeVisible && (
          <StyledBadge offset={offset} type={type} showCount={showCount}>
            {showCount && displayCount}
          </StyledBadge>
        )}
      </>
    </Wrapper>
  );
};

export default React.forwardRef(Badge);
