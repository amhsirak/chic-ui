import React, { ReactElement, ReactNode, useEffect, useState } from 'react';

import { themeType } from '../../tokens/themes';
import { StepsList } from './styled';

export type stepsDirection = 'horizontal' | 'vertical';

export interface StepsProps {
  /** Count of step start from 0.*/
  active?: number;
  /** Steps direction */
  direction?: stepsDirection;
  /** Change to vertical direction when screen width smaller than 532px */
  responsive?: boolean;
  onChange?: (active: number) => void;
  /** Theme type for all steps. Can override this with theme of step */
  type?: themeType;
  /** Custom Divider */
  divider?: ReactNode;
  style?: React.CSSProperties;
  children: ReactElement[] | ReactElement;
}

const Steps: React.ForwardRefRenderFunction<HTMLDivElement, StepsProps> = (
  props,
  ref
) => {
  const {
    type = 'primary',
    active = 0,
    direction = 'horizontal',
    responsive = true,
    onChange = (active: number) => {},
    divider,
    style,
    children
  } = props;

  const [responsiveDir, setResponsiveDir] = useState(direction);

  useEffect(() => {
    const media = window.matchMedia('(max-width: 470px)');
    const setDirection = (media) => {
      if (media.matches) {
        setResponsiveDir('vertical');
      } else {
        setResponsiveDir('horizontal');
      }
    };
    if (responsive) {
      media.onchange = setDirection;
      setDirection(media);
    } else {
      setResponsiveDir(direction);
    }
  }, [responsive, direction]);

  const stepsLength = React.Children.count(children);

  return (
    <div ref={ref}>
      <StepsList dir={responsiveDir}>
        {React.Children.map(children, (child, i) =>
          React.cloneElement(child as ReactElement, {
            type,
            responsive,
            style,
            index: i,
            length: stepsLength,
            activeIndex: active,
            direction: responsiveDir,
            onChange,
            divider
          })
        )}
      </StepsList>
    </div>
  );
};

export default React.forwardRef<unknown, StepsProps>(Steps);
