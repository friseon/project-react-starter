import { createStore, Middleware, applyMiddleware, compose, StoreEnhancer } from 'redux';
import { History } from 'history';
import { routerMiddleware, RouterState } from 'connected-react-router';
import { WindowExtended } from '../typings/app';
import { rootReducer } from './reducers';
import { CounterState } from './reducers/counter';

declare var window: WindowExtended;

export type AppState = ReturnType<typeof rootReducer>;

export interface IAppState {
    router?: RouterState;
    counter: CounterState;
}

export const createAppStore = (initialState: IAppState, history: History) => {
    const enhancers: StoreEnhancer[] = [];
    const middlewares: Middleware[] = [routerMiddleware(history)];

    if (process.env.NODE_ENV === 'development') {
        if (typeof window === 'object' && window.__REDUX_DEVTOOLS_EXTENSION__) {
            enhancers.push(window.__REDUX_DEVTOOLS_EXTENSION__( ));
        }
    }

    return createStore(
        rootReducer(history),
        initialState,
        compose(applyMiddleware(...middlewares), ...enhancers)
    );
};