import React, { ChangeEventHandler, HTMLAttributes } from 'react';
import { ComponentSize } from '../../config/sizes';
import { StyledWrapper, StyledTextInput, StyledIcon, StyledCross } from './styled';

export interface TextInputProps extends Omit<HTMLAttributes<HTMLInputElement>, 'size' | 'disabled' | 'onChange'> {
    size?: ComponentSize;
    disabled?: boolean;
    icon?: React.ElementType;
    error?: boolean;
    width?: string;
    value?: string;
    className?: string;
    onChange?: ChangeEventHandler<HTMLInputElement>;
    // if input is controlled by another element
    readonly?: boolean;
    clearable?: boolean;
    [key: string]: any;
}

const TextInput: React.ForwardRefRenderFunction<HTMLInputElement, TextInputProps> = (props, ref) => {
    const {
        size = 'default',
        disabled = false,
        icon,
        error =  false,
        width = '100%',
        value,
        className,
        onChange,
        readonly = false,
        clearable = false,
        placeholder,
        ...rest
    } = props;

    const styles = {
        innerSize: size,
        disabled: disabled,
        error,
        width,
        withIcon: icon !== undefined,
        withCross: clearable
    };
    return(
        <StyledWrapper width={width} innerSize={size} />
    );
}

export default React.forwardRef<HTMLInputElement, TextInputProps>(TextInput);