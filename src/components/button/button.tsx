import React, { FC } from 'react';
import { cnButton } from './Button.const';

import './Button.scss';

interface IButtonProps {
    className?: string;
    text?: string;
    onClick?: any;
}

export const Button: FC<IButtonProps> = (props: IButtonProps) => {
    const { onClick, text = '', className} = props;

    return (
        <button className={cnButton({}, [className] )} onClick={onClick}>
            { text }
        </button>
    );
}
