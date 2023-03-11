import React from 'react';
import { themeType } from '../../tokens/themes';
import {
  StyledCircularProgressInnerCircle,
  StyledCircularProgressWrapper,
  StyledLoadingText
} from './styled';

export interface CircularProgressBarProps {
  progress?: number;
  type?: themeType;
  showProgress?: boolean;
  style?: React.CSSProperties;
  className?: string;
}

const CircularProgressBar: React.ForwardRefRenderFunction<
  HTMLAnchorElement,
  CircularProgressBarProps
> = (props, ref) => {
  let {
    progress = 70,
    type = 'primary',
    showProgress = true,
    style,
    className
  } = props;
  const degree = 3.6 * progress;

  const getProgressAndDegree = (value: number, maxValue: number) => {
    if (value < 0) return 0;
    if (value > maxValue) return maxValue;

    return value;
  };

  return (
    <StyledCircularProgressWrapper
      type={type}
      style={style}
      className={className}
      degree={getProgressAndDegree(degree, 360)}
    >
      <StyledCircularProgressInnerCircle>
        <StyledLoadingText>
          {showProgress ? getProgressAndDegree(progress, 100) + '%' : null}
        </StyledLoadingText>
      </StyledCircularProgressInnerCircle>
    </StyledCircularProgressWrapper>
  );
};

export default React.forwardRef<HTMLAnchorElement, CircularProgressBarProps>(
  CircularProgressBar
);
