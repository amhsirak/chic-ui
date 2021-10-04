import React, { useCallback } from 'react';
import { ComponentSize } from '../../config/sizes';
import { SwitchToggle, SwitchWrapper } from './styled';

export type SwitchType =
  | 'default'
  | 'secondary'
  | 'danger'
  | 'warning'
  | 'success';

export type SwitchPadding = 'default' | 'small' | 'large';

export interface SwitchProps {
  size?: ComponentSize;
  type?: SwitchType;
  padding?: SwitchPadding;
  checked?: boolean;
  onChange?: () => void;
  disabled?: boolean;
  className?: string;
}

export const Switch: React.ForwardRefRenderFunction<
  HTMLInputElement,
  SwitchProps
> = (props, ref) => {
  const {
    size = 'default',
    type = 'default',
    padding = 'default',
    checked = false,
    disabled = false,
    className,
    onChange
  } = props;

  const handleOnChange = useCallback(() => {
    if (!disabled && onChange) {
      onChange();
    }
  }, [onChange, disabled]);

  return (
    <SwitchWrapper
      type={type}
      size={size}
      className={className}
      disabled={disabled}
      padding={padding}
      checked={checked}
      onClick={handleOnChange}
    >
      <input ref={ref} type="checkbox" checked={checked} hidden />
      <SwitchToggle
        type={type}
        size={size}
        padding={padding}
        checked={checked}
        disabled={disabled}
      />
    </SwitchWrapper>
  );
};

export default React.forwardRef<HTMLInputElement, SwitchProps>(Switch);
