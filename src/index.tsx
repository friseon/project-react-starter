import React from 'react';
import * as ReactDOM from 'react-dom';

import { createBrowserHistory } from 'history';
import { createAppStore } from './store';

import { Application } from './components/application';

const initialState = {
    counter: {
        value: 0
    }
};

const history = createBrowserHistory();
const store = createAppStore(initialState, history);

ReactDOM.render(
    <Application history={history} store={store} />,
    document.getElementById('app'),
);
