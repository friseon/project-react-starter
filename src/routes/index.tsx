import React from 'react';
import { RouteProps } from 'react-router-dom';
import { Main } from '../pages/Main';

export const routes: RouteProps[] = [
    {
        path: '/main',
        children: <Main />,
    },
];