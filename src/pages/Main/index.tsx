import React, { FC } from 'react';
import { cn } from '@bem-react/classname';

import './Main.scss';

const cnMain = cn('main');

export const Main: FC = () => {
    return (
        <>
            <h1 className={cnMain('header')}>Main page</h1>
        </>
    );
};