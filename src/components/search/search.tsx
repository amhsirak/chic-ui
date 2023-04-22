import React, { ChangeEventHandler } from 'react';
import Button from '../button';
import TextInput from '../text-input';
import { ComponentSize } from '../../tokens/sizes';
import { SearchWrapper } from './styled';

export interface SearchProps {
  className?: string;
  size?: ComponentSize;
  width?: string;
  value?: string;
  onChange?: ChangeEventHandler<HTMLInputElement>;
  style?: React.CSSProperties;
  placeholder?: string;
}

const Search: React.ForwardRefRenderFunction<HTMLDivElement, SearchProps> = (
  props,
  ref
) => {
  const {
    className,
    value,
    onChange,
    placeholder,
    width = '100%',
    style
  } = props;

  const textInputStyles = {
    width: '100%'
  };

  return (
    <SearchWrapper ref={ref} className={className} width={width}>
      <TextInput
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        clearable
        isSearch={true}
        style={style}
        {...textInputStyles}
      />
      <Button type="secondary" search={true}>
        Search
      </Button>
    </SearchWrapper>
  );
};

export default React.forwardRef<HTMLDivElement, SearchProps>(Search);
