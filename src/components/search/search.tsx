import Button from '../button';
import TextInput  from '../text-input';
import { SearchWrapper } from './styled';
import { ComponentSize } from '../../config/sizes';
import { ChangeEventHandler } from 'react';

export interface SearchProps {
    className?: string;
    size?: ComponentSize;
    width?: string;
    value?: string;
    onChange?: ChangeEventHandler<HTMLInputElement>;
    placeholder?: string;
}