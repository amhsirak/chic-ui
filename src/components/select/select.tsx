import React, { useEffect, useState } from 'react';
import { ComponentSize } from '../../tokens/sizes';
import {
  SelectWrapper,
  SelectOption,
  StyledSelectDiv,
  SelectOptionWrapper,
  ArrowDown,
  StyledCross,
  MultiSelectOptionWrapper
} from './styled';

export interface SelectProps<T> {
  className?: string;
  size?: ComponentSize;
  width?: string;
  data?: T[];
  disabled?: boolean;
  dataKey?: string;
  multiSelect?: boolean;
  dataName?: string;
  error?: boolean;
  placeholder?: string;
  onChange?: (value: T | T[]) => void;
}

const Select: React.ForwardRefRenderFunction<
  HTMLDivElement,
  SelectProps<any>
> = (
  {
    className,
    size = 'default',
    disabled,
    error,
    multiSelect,
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
  const [selectedOption, setSelectedOption] = useState<any>();

  useEffect(() => {
    onChange && onChange(selectedOption);
  }, [selectedOption]);

  const onOptionSelect = (value: string) => {
    if (!disabled) {
      const selectedValue = dataKey
        ? data?.find((option) => option[dataKey] === value)
        : value;
      multiSelect
        ? setMultiSelectOption(selectedValue)
        : setSelectedOption(selectedValue);
      if (!multiSelect) {
        setShowOptions(false);
      }
    }
  };

  const setMultiSelectOption = (selectedValue: any) => {
    if (selectedOption && selectedOption.length > 0) {
      const selected = dataKey
        ? selectedOption.find(
            (option: any) => option[dataKey] === selectedValue[dataKey]
          )
        : selectedOption.includes(selectedValue);
      if (selected) {
        dataKey && dataName
          ? setSelectedOption(
              selectedOption.filter(
                (option: any) => option[dataKey] !== selectedValue[dataKey]
              )
            )
          : setSelectedOption(
              selectedOption.filter((option: any) => option !== selectedValue)
            );
      } else {
        setSelectedOption([...selectedOption, selectedValue]);
      }
    } else {
      setSelectedOption([selectedValue]);
    }
  };

  const showSelectedOptionValue = () => {
    if (!multiSelect) {
      if (dataName) {
        return (selectedOption && selectedOption[dataName]) || placeholder;
      } else {
        return selectedOption || placeholder;
      }
    } else {
      return (
        (selectedOption &&
          selectedOption.length > 0 &&
          selectedOption.map((option: any) => (
            <MultiSelectOptionWrapper>
              {dataKey && dataName ? option[dataName] : option}
              <StyledCross
                onClick={(e) => (
                  e.stopPropagation, setMultiSelectOption(option)
                )}
              />
            </MultiSelectOptionWrapper>
          ))) ||
        placeholder
      );
    }
  };

  return (
    <SelectWrapper ref={ref} className={className} width={width}>
      <StyledSelectDiv
        tabIndex={disabled ? undefined : 0}
        disabled={disabled || false}
        error={error || false}
        innerSize={size}
        onClick={() => !disabled && setShowOptions(!showOptions)}
      >
        <div>{showSelectedOptionValue()}</div>
        <ArrowDown />
      </StyledSelectDiv>
      {showOptions && (
        <SelectOptionWrapper>
          {data &&
            data.map((option, index) => (
              <SelectOption
                selected={
                  multiSelect &&
                  selectedOption &&
                  selectedOption.length > 0 &&
                  (dataKey && dataName
                    ? !!selectedOption.find(
                        (opt: any) => opt[dataKey] === option[dataKey]
                      )
                    : selectedOption.includes(option))
                }
                key={`${option}_${index}`}
                onClick={(e) => (
                  e.stopPropagation,
                  onOptionSelect(dataKey ? option[dataKey] : option)
                )}
              >
                {dataKey && dataName ? option[dataName] : option}
              </SelectOption>
            ))}
        </SelectOptionWrapper>
      )}
    </SelectWrapper>
  );
};

export default React.forwardRef<HTMLDivElement, SelectProps<any>>(Select);
