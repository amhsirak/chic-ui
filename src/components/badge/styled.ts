import styled, { css } from 'styled-components';
import { BadgeProps } from './badge';

export const Wrapper = styled.div`
  position: relative;
  display: inline-block;
`;

type StyledBadgeProps = Required<
  Pick<BadgeProps, 'offset' | 'showCount' | 'type'>
>;

const getTypeStyles = (type: StyledBadgeProps['type']) =>
  ({
    default: css`
      background: #0018cf;
    `,
    secondary: css`
      background: #000;
    `,
    danger: css`
      background: #d93848;
    `,
    warning: css`
      background: #de9b00;
    `,
    success: css`
      background: #039e2f;
    `,
    light: css`
      background: #faf7f7;
      color: #000;
    `
  }[type]);

export const StyledBadge = styled.div<StyledBadgeProps>`
  position: absolute;
  z-index: 2;
  border-radius: 9999px;
  background: white;
  padding: 4px 6px;
  text-align: center;
  color: #fff;
  font-size: 11px;
  display: flex;
  align-items: center;
  justify-content: center;
  transform: translate(40%, -40%);
  box-shadow: 0 0 0 1px #fff;

  ${({ offset, showCount, type }) => css`
    right: ${0 - offset[0]}px;
    top: ${0 + offset[1]}px;

    ${showCount
      ? css`
          min-width: 19px;
          height: 19px;
        `
      : css`
          min-width: 13px;
          height: 13px;
        `}

    ${getTypeStyles(type)}
  `}
`;
