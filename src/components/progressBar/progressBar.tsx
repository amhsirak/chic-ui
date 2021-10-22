import React from 'react';
import { themeType } from '../../config/themes';
import { StyledProgressBar, StyledLoadingText, StyledProgressWrapper } from './styled';

export interface ProgressBarProps {
  progress?: number;
  type?: themeType;
  showProgress?: boolean;
}

const ProgressBar: React.ForwardRefRenderFunction<
  HTMLAnchorElement,
  ProgressBarProps
> = (props, ref) => {
  const {
    progress = 70,
    type = 'default',
    showProgress = true
  } = props;

  return (
    <StyledProgressWrapper>
      <StyledProgressBar
        type={type}
        width={progress}>
        {showProgress && (
            <div
              style={{
                height: '100%',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
              }}
            >
              <StyledLoadingText>{progress}% </StyledLoadingText>
            </div>
        )}
      </StyledProgressBar>
    </StyledProgressWrapper>
  );
};

export default React.forwardRef<HTMLAnchorElement, ProgressBarProps>(
  ProgressBar
);
