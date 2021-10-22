import React, { PropsWithChildren } from 'react';
import { Wrapper, StyledBadge } from './styled';
import { themeType } from '../../config/themes';

export const BADGE_TYPES = [
  'default',
  'secondary',
  'danger',
  'warning',
  'success',
  'light'
] as const;

type BadgeType = themeType[number];

export type BadgeProps = {
  count?: number;
  limit?: number;
  type?: BadgeType;
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
    type = 'default',
    showCount = true,
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

