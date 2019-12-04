import React, { FC } from 'react';
import { cnInput } from './Input.const';

import './Input.scss';

interface IFieldProps extends React.Props<HTMLInputElement> {
    className?: string;
    text?: string | number;
    onChange?: any;
    readonly?: boolean;
    placeholder?: string;
    type?: 'text' | 'number'
}

export const Input: FC<IFieldProps> = (props: IFieldProps) => {
    const {
        className,
        onChange,
        text = 'Empty',
        readonly = false,
        placeholder = 'Empty',
        type = 'number'
    } = props;

    return (
        <input
            className={cnInput({}, [className] )}
            type={type}
            value={text}
            placeholder={placeholder}
            readOnly={readonly}
            onChange={onChange}
        />
    );
}
