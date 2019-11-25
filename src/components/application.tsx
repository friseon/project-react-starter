import React, { FC } from 'react';
import { Route } from 'react-router-dom';

import { Store } from 'redux';
import { ConnectedRouter } from 'connected-react-router';
import { Provider as ReduxProvider } from 'react-redux';
import { History } from 'history';
import { routes } from '../routes';

interface ApplicationProps {
    store: Store;
    history: History;
}

export const Application: FC<ApplicationProps> = ({ store, history }) => (
    <ReduxProvider store={store}>
        <ConnectedRouter history={history}>
            {routes.map(route => (
                <Route key={String(route.path)} {...route} />
            ))}
        </ConnectedRouter>
    </ReduxProvider>
);
