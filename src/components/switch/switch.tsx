import React, { useCallback } from 'react';
import { ComponentSize } from '../../tokens/sizes';
import { SwitchToggle, SwitchWrapper } from './styled';
import { themeType } from '../../tokens/themes';

export interface SwitchProps {
  size?: ComponentSize;
  type?: themeType;
  padding?: ComponentSize;
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
    type = 'primary',
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
