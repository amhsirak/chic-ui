import React, { useState } from 'react';
import { ComponentSize } from '../../config/sizes';
import {
  SelectWrapper,
  SelectOption,
  StyledSelectDiv,
  SelectOptionWrapper,
  ArrowDown
} from './styled';

export interface SelectProps<T> {
  className?: string;
  size?: ComponentSize;
  width?: string;
  data?: T[];
  disabled?: boolean;
  dataKey?: string;
  dataName?: string;
  error?: boolean;
  placeholder?: string;
  onChange?: (value: T) => void;
}

const Select: React.ForwardRefRenderFunction<
  HTMLDivElement,
  SelectProps<any>
> = (
  {
    className,
    size,
    disabled,
    error,
    width = '100%',
    data,
    dataKey,
    dataName,
    placeholder,
    onChange
  },
  ref
) => {
  const [showOptions, setShowOptions] = useState(false);
  const [selectedOption, setSelectedOption] = useState('');

  const onOptionSelect = (value: string) => {
    if (!disabled) {
      const selectedValue = dataKey
        ? data?.find((option) => option[dataKey] === value)
        : value;
      setSelectedOption(
        dataKey && dataName ? selectedValue[dataName] : selectedValue
      );
      setShowOptions(false);
      onChange && onChange(selectedValue);
    }
  };

  return (
    <SelectWrapper ref={ref} className={className} width={width}>
      <StyledSelectDiv
        tabIndex={disabled ? undefined : 0}
        disabled={disabled || false}
        error={error || false}
        innerSize={size || 'small'}
        onClick={() => !disabled && setShowOptions(!showOptions)}
      >
        {selectedOption || placeholder}
        <ArrowDown />
      </StyledSelectDiv>
      {showOptions && (
        <SelectOptionWrapper>
          <ul>
            {data &&
              data.map((option, index) => (
                <SelectOption
                  key={`${option}_${index}`}
                  onClick={() =>
                    onOptionSelect(dataKey ? option[dataKey] : option)
                  }
                >
                  {dataKey && dataName ? option[dataName] : option}
                </SelectOption>
              ))}
          </ul>
        </SelectOptionWrapper>
      )}
    </SelectWrapper>
  );
};

export default React.forwardRef<HTMLDivElement, SelectProps<any>>(Select);
