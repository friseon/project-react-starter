import React, { FC } from 'react';
import { useLocation } from 'react-router';
import { cn } from '@bem-react/classname';

import './Main.scss';

const cnMain = cn('main');

export const Main: FC = () => {
    const location = useLocation();

    return (
        <>
            <h1 className={cnMain('header')}>Hello, this is Main page!</h1>
            <div>You location is: {location.pathname}</div>
        </>
    );
};