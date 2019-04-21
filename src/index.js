import React from 'react';
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

import App from './components/App';
import reducers from './reducers';

const initialState = {};

const myStore = createStore(reducers, initialState, applyMiddleware(thunk));

ReactDOM.render(
    <Provider store={myStore}>
        <App />
    </Provider>,

    document.querySelector("#root")
);