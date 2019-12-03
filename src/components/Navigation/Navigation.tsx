import React, { FC } from 'react';
import { Link } from 'react-router-dom';
import { cn } from '../../constants';

import './Navigation.scss';

const cnNavigation = cn('navigation');

export const Navigation: FC = () => {
    return (
        <nav className={cnNavigation()}>
            <ul className={cnNavigation('list')}>
                <li className={cnNavigation('item')}><Link to='/'>Home</Link></li>
                <li className={cnNavigation('item')}><Link to='/main'>Main</Link></li>
            </ul>
        </nav>
    );
};