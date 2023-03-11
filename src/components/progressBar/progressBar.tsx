import React from 'react';
import { themeType } from '../../tokens/themes';
import {
  StyledProgressBar,
  StyledLoadingText,
  StyledProgressWrapper
} from './styled';

export interface ProgressBarProps {
  progress?: number;
  type?: themeType;
  showProgress?: boolean;
  animated?: boolean;
  striped?: boolean;
  stripedAnimated?: boolean;
  style?: React.CSSProperties;
  className?: string;
}

const ProgressBar: React.ForwardRefRenderFunction<
  HTMLAnchorElement,
  ProgressBarProps
> = (props, ref) => {
  const {
    progress = 70,
    type = 'primary',
    showProgress = true,
    style,
    className
  } = props;

  return (
    <StyledProgressWrapper>
      <StyledProgressBar
        type={type}
        width={progress}
        showProgress={showProgress}
        style={style}
        className={className}
        {...props}
      >
        {showProgress && (
          <div
            style={{
              height: '100%',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center'
            }}
          >
            <StyledLoadingText type={type}>{progress}% </StyledLoadingText>
          </div>
        )}
      </StyledProgressBar>
    </StyledProgressWrapper>
  );
};

export default React.forwardRef<HTMLAnchorElement, ProgressBarProps>(
  ProgressBar
);
