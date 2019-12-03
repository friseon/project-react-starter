import React, { FC } from 'react';
import { Route } from 'react-router-dom';

import { Store } from 'redux';
import { ConnectedRouter } from 'connected-react-router';
import { Provider as ReduxProvider } from 'react-redux';
import { History } from 'history';
import { routes } from '../routes';

import { Navigation } from './Navigation/Navigation';

interface ApplicationProps {
    store: Store;
    history: History;
}

export const Application: FC<ApplicationProps> = ({ store, history }) => (
    <ReduxProvider store={store}>
        <ConnectedRouter history={history}>
            <header>
                <h1>
                    Hello
                    <span>span</span>
                </h1>
            </header>
            <Navigation />
            {routes.map(route => (
                <Route key={String(route.path)} {...route} />
            ))}
        </ConnectedRouter>
    </ReduxProvider>
);
