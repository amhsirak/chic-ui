import React, { ReactNode, ElementType, HTMLAttributes } from 'react';
import { StyledProgressBar,StyledLoadingText } from './styled';

export interface ProgressBarProps  {
 progress?:number;
 fgColor?:string;
 bgColor?:string;
 height ?: number;
}

const ProgressBar: React.ForwardRefRenderFunction<HTMLAnchorElement, ProgressBarProps> = (
  props,
  ref
) => {
  const {progress= 70, fgColor = "#123123" , bgColor="#E2E2E2" , height=20} = props

  return (
      <div style={{position:'relative'}} >
          <StyledLoadingText>
            <div style={{height:"100%" , display:"flex",justifyContent:" center",alignItems: "center"}}>
                <span>{progress}% </span>
            </div>
          </StyledLoadingText>
    <StyledProgressBar
    color={fgColor}
    height={height}
    width = {progress}
    >
    </StyledProgressBar>
    <StyledProgressBar
    color={bgColor}
    height={height}
    width = {100-progress}
    >
    </StyledProgressBar>
        </div>
  );
};

export default React.forwardRef<HTMLAnchorElement, ProgressBarProps>(ProgressBar);