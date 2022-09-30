import styled from 'styled-components';
import { BadgeProps } from './badge';
import { theme as typeColors } from '../../tokens/themes';

export const Wrapper = styled.div`
  position: relative;
  display: inline-block;
`;

type StyledBadgeProps = Required<
  Pick<BadgeProps, 'offset' | 'showCount' | 'type'>
>;

export const StyledBadge = styled.div<StyledBadgeProps>`
  position: absolute;
  z-index: 2;
  border-radius: 9999px;
  background: ${(pr) => typeColors[pr.type!].bgColor};
  padding: 4px 6px;
  text-align: center;
  color: ${(pr) => typeColors[pr.type!].color};
  font-size: 11px;
  display: flex;
  align-items: center;
  justify-content: center;
  transform: translate(40%, -40%);
  box-shadow: 0 0 0 1px ${typeColors.light.bgColor};

  ${(pr) =>
    pr.offset &&
    `
    right: ${0 - pr.offset[0]}px;
    top: ${0 + pr.offset[1]}px;
  `}

  ${(pr) =>
    pr.showCount
      ? `
    min-width: 19px;
    height: 19px;
  `
      : `
    min-width: 13px;
    height: 13px;
  `}
`;
