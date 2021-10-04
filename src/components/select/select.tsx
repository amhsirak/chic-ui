import React, { useState } from 'react';
import { ComponentSize } from '../../config/sizes';
import {
  SelectWrapper,
  SelectOption,
  StyledSelectDiv,
  SelectOptionWrapper
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
  onChange: (value: T) => void;
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
    const selectedValue = dataKey
      ? data?.find((x) => x[dataKey] === value)
      : value;
    console.log(selectedValue);
    setSelectedOption(
      dataKey && dataName ? selectedValue[dataName] : selectedValue
    );
    setShowOptions(false);
    onChange && onChange(selectedValue);
  };

  return (
    <SelectWrapper ref={ref} className={className} width={width}>
      <StyledSelectDiv
        disabled={disabled || false}
        error={error || false}
        innerSize={size || 'small'}
        onClick={() => setShowOptions(!showOptions)}
      >
        {selectedOption || placeholder}
      </StyledSelectDiv>
      {showOptions && (
        <SelectOptionWrapper>
          <ul>
            {data &&
              data.map((x, i) => (
                <SelectOption
                  key={`${x}_${i}`}
                  onClick={() => onOptionSelect(dataKey ? x[dataKey] : x)}
                >
                  {dataKey && dataName ? x[dataName] : x}
                </SelectOption>
              ))}
          </ul>
        </SelectOptionWrapper>
      )}
    </SelectWrapper>
  );
};

export default React.forwardRef<HTMLDivElement, SelectProps<any>>(Select);
