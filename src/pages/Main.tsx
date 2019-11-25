import React, { FC } from 'react';
import { useLocation } from 'react-router';

import './Main.scss';

export const Main: FC = () => {
    const location = useLocation();

    return (
        <>
            <h1 className="main-header">Hello, this is Main page!</h1>
            <div>You location is: {location.pathname}</div>
        </>
    );
};