import React from 'react';
import { themeType } from '../../config/themes';
import { StyledProgressBar, StyledLoadingText, StyledProgressWrapper } from './styled';

export interface ProgressBarProps {
  progress?: number;
  type?: themeType;
  height?: number;
  loadingText?: boolean;
}

const ProgressBar: React.ForwardRefRenderFunction<
  HTMLAnchorElement,
  ProgressBarProps
> = (props, ref) => {
  const {
    progress = 70,
    type = 'default',
    height = 20,
    loadingText = true
  } = props;

  return (
    <StyledProgressWrapper
    width={100}
    >
      {loadingText && (
        <StyledLoadingText>
          <div
            style={{
              height: '100%',
              display: 'flex',
              justifyContent: ' center',
              alignItems: 'center'
            }}
          >
            <span>{progress}% </span>
          </div>
        </StyledLoadingText>
      )}
      <StyledProgressBar
        type={type}
        width={progress}
      ></StyledProgressBar>
    </StyledProgressWrapper>
  );
};

export default React.forwardRef<HTMLAnchorElement, ProgressBarProps>(
  ProgressBar
);
