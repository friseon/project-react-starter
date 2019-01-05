import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';

import rootReducer from '../reducers';
import { FieldState } from '../reducers/field';
import { ButtonState } from '../reducers/button';

/**
 * Интерфейс хранилища будет использоваться в каждом mapStateToProps, 
 * и в остальных местах, где мы напрямую получаем состояние хранилища 
 * (например, в асинхронных действиях с redux-thunk)
 */
export interface IStore {
    field: FieldState;
    button: ButtonState;
}

/**
 * Этот же интерфейс указывается в качестве состояния при инициализации хранилища.
 */
const configureStore = (initialState?: IStore) => {
    return createStore(
        rootReducer,
        initialState, // applyMiddleware(thunk),
        composeWithDevTools(
            applyMiddleware(thunk)
        )
    )
};

export default configureStore;