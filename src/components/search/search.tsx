import React, { ChangeEventHandler } from 'react';
import Button from '../button';
import TextInput from '../text-input';
import { ComponentSize } from '../../config/sizes';
import { SearchWrapper } from './styled';
import SearchIcon from '../../icons/Search';

export interface SearchProps {
    className?: string;
    size?: ComponentSize;
    width?: string;
    value?: string;
    onChange?: ChangeEventHandler<HTMLInputElement>;
    placeholder?: string;
}

const Search: React.ForwardRefRenderFunction<HTMLDivElement, SearchProps> = (props, ref) => {
    const { 
        size = 'default',
        className,
        value,
        onChange,
        placeholder,
        width = '100%',
    } = props;

    const textInputStyles = {
        size,
        width: '100%',
        placeholder
    }

    return (
        <SearchWrapper
            ref={ref}
            className={className}
            width={width}
        >
            <TextInput
                value={value}
                onChange={onChange}
                //placeholder={placeholder}
                clearable
                {...textInputStyles}
            />
            <Button type='secondary' icon={SearchIcon} />
        </SearchWrapper>
    );
}

export default React.forwardRef<HTMLDivElement, SearchProps>(Search);