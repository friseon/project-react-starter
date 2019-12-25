import React from 'react';
import { RouteProps } from 'react-router-dom';
import { Main } from '../pages/Main';
import { Counter } from '../pages/Counter';
import { BigList } from '../pages/BigList';

interface NavigationProps extends RouteProps {
    name: string;
}

export const routes: NavigationProps[] = [
    {
        path: '/main',
        name: 'Main',
        children: <Main />,
    },
    {
        path: '/counter',
        name: 'Counter',
        children: <Counter />,
    },
    {
        path: '/list',
        name: 'Big List',
        children: <BigList />,
    },
];