import { createStore, Middleware, applyMiddleware, compose, StoreEnhancer } from 'redux';
import { History } from 'history';
import { routerMiddleware, RouterState } from 'connected-react-router';
import { WindowExtended } from '../typings/app';

declare var window: WindowExtended;

import { rootReducer } from './reducers';

export interface State {
    router?: RouterState,
}

export const createAppStore = (initialState: State, history: History) => {
    const enhancers: StoreEnhancer[] = [];
    const middlewares: Middleware[] = [routerMiddleware(history)];

    console.log('>>>', process.env)

    if (process.env.NODE_ENV === 'development') {
        if (typeof window === 'object' && window.__REDUX_DEVTOOLS_EXTENSION__) {
            enhancers.push(window.__REDUX_DEVTOOLS_EXTENSION__());
        }
    }

    return createStore(
        rootReducer(history),
        initialState,
        compose(applyMiddleware(...middlewares), ...enhancers)
    );
};