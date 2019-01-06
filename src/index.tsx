import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';

import { applyMiddleware } from 'redux';
import { Provider } from 'react-redux';

import reducers from './reducers';
import configureStore from './store';

import { App } from './components/app';

import styles from './index.scss';

const store = configureStore();

ReactDOM.render(
    <Provider store={store}>
        <BrowserRouter>
            <App compiler="" framework=""/>
        </BrowserRouter>
    </Provider>,
    document.getElementById('app'),
);
