import React, { ChangeEventHandler } from 'react';
import { StyledSlider } from './styled';

export type SliderType =
  | 'default'
  | 'secondary'
  | 'danger'
  | 'warning'
  | 'success'
  | 'light';

interface BaseSliderProps {
  type?: SliderType;
  disabled?: boolean;
  min?: number;
  max?: number;
  step?: number;
  value?: number;
  onChange?: ChangeEventHandler<HTMLInputElement>;
}

export type SliderProps = HTMLInputElement & BaseSliderProps;

const Slider: React.ForwardRefRenderFunction<HTMLInputElement, SliderProps> = (
  props,
  ref
) => {
  let {
    min,
    max,
    step,
    onChange,
    className,
    value,
    type = 'default',
    disabled = false
  } = props;

  const styles = {
    innerType: type,
    disabled
  };

  return (
    <StyledSlider
      type="range"
      onChange={onChange}
      min={min}
      max={max}
      value={value}
      step={step}
      ref={ref as React.MutableRefObject<HTMLInputElement>}
      className={className}
      {...styles}
    ></StyledSlider>
  );
};

export default React.forwardRef<HTMLInputElement, SliderProps>(Slider);
