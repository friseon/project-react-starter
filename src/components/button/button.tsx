import React, { FC } from 'react';

import './Button.scss';

interface IButtonProps {
    mix?: string;
    text?: string;
    onClick?: any;
}

export const Button: FC<IButtonProps> = (props: IButtonProps) => {
    const { mix = '', onClick, text = 'Button'} = props;
    const className = [String(mix), 'button'].join('');

    return (
        <button className={className} onClick={onClick}>
            { text }
        </button>
    );
}
