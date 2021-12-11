import React from 'react';
import { themeType } from 'config/themes';
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
}

const ProgressBar: React.ForwardRefRenderFunction<
  HTMLAnchorElement,
  ProgressBarProps
> = (props) => {
  const {
    progress = 70,
    type = 'default',
    showProgress = true,
    animated = false
  } = props;

  return (
    <StyledProgressWrapper>
      <StyledProgressBar type={type} width={progress} animated={animated}>
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
