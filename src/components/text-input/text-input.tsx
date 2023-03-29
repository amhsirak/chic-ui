import React, { ChangeEventHandler, HTMLAttributes } from 'react';
import { ComponentSize } from '../../tokens/sizes';
import {
  StyledWrapper,
  StyledTextInput,
  StyledIcon,
  StyledCross
} from './styled';

export interface TextInputProps
  extends Omit<
    HTMLAttributes<HTMLInputElement>,
    'size' | 'disabled' | 'onChange'
  > {
  size?: ComponentSize;
  disabled?: boolean;
  icon?: React.ElementType;
  error?: boolean;
  width?: string;
  value?: string;
  bordered: boolean;
  maxLength?: number;
  onChange?: ChangeEventHandler<HTMLInputElement>;
  // if input is controlled by another element
  readonly?: boolean;
  clearable?: boolean;
  style?: React.CSSProperties;
  [key: string]: any;
  className?: string;
}

const TextInput: React.ForwardRefRenderFunction<
  HTMLInputElement,
  TextInputProps
> = (props, ref) => {
  const {
    size = 'default',
    disabled = false,
    icon,
    error = false,
    width = '100%',
    value,
    className,
    onChange,
    maxLength,
    bordered = true,
    readonly = false,
    clearable = false,
    search = false,
    placeholder,
    ...rest
  } = props;

  const styles = {
    innerSize: size,
    disabled: disabled,
    error,
    width,
    bordered,
    withIcon: icon !== undefined,
    withCross: clearable,
    isSearch: search
  };
  return (
    <StyledWrapper width={width} innerSize={size}>
      <StyledTextInput
        type={rest.type || 'text'}
        value={value}
        onChange={onChange}
        readOnly={readonly}
        ref={ref}
        maxLength={maxLength}
        className={className}
        placeholder={placeholder}
        {...styles}
        {...rest}
      />
      <StyledIcon as={icon} innerSize={size} />
      {clearable && value ? (
        <StyledCross
          innerSize={size}
          onClick={() =>
            onChange && onChange({ currentTarget: { value: '' } } as any)
          }
        />
      ) : null}
    </StyledWrapper>
  );
};

export default React.forwardRef<HTMLInputElement, TextInputProps>(TextInput);
