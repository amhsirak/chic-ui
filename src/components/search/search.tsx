import React, { ChangeEventHandler } from 'react';
import Button from '../button';
import TextInput from '../text-input';
import { ComponentSize } from '../../config/sizes';
import { SearchWrapper } from './styled';

export interface SearchProps {
  className?: string;
  size?: ComponentSize;
  width?: string;
  value?: string;
  onChange?: ChangeEventHandler<HTMLInputElement>;
  placeholder?: string;
}

const Search: React.ForwardRefRenderFunction<HTMLDivElement, SearchProps> = (
  props,
  ref
) => {
  const { className, value, onChange, placeholder, width = '100%' } = props;

  const textInputStyles = {
    width: '100%'
    //placeholder
  };

  return (
    <SearchWrapper ref={ref} className={className} width={width}>
      <TextInput
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        clearable
        {...textInputStyles}
      />
      <Button type="secondary">Search</Button>
    </SearchWrapper>
  );
};

export default React.forwardRef<HTMLDivElement, SearchProps>(Search);
