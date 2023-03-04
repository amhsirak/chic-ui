import React from 'react';
import { StyledSpinner } from './styled';
import { themeType } from '../../tokens/themes';

export interface SpinnerProps {
  type?: themeType;
  size?: number;
  className?: string;
  style?: React.CSSProperties;
}

const Spinner: React.ForwardRefRenderFunction<HTMLDivElement, SpinnerProps> = (
  props,
  ref
) => {
  const { type = 'light', size = 50, className, style } = props;

  const styles = {
    innerType: type,
    size
  };

  return <StyledSpinner ref={ref} className={className} style={style} {...styles} />;
};

export default React.forwardRef<HTMLDivElement, SpinnerProps>(Spinner);
