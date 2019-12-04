import React, { FC } from 'react';
import { Link } from 'react-router-dom';
import { cn } from '../../constants';
import { routes } from '../../routes';

import './Navigation.scss';

const cnNavigation = cn('navigation');

export const Navigation: FC = () => {
    return (
        <nav className={cnNavigation()}>
            <ul className={cnNavigation('list')}>
                <li className={cnNavigation('item')}><Link to='/'>Home</Link></li>
                {routes.map(route => (
                    <li key={String(route.path)} className={cnNavigation('item')}>
                        <Link to={String(route.path)}>{route.name}</Link>
                    </li>
                ))}
            </ul>
        </nav>
    );
};