import React from 'react';
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

import App from './components/App';
import reducers from './reducers';
import { ApolloProvider } from '@apollo/react-hooks';

import { gql } from 'apollo-boost';
import ApolloClient from 'apollo-boost';
const initialState = {};

const myStore = createStore(reducers, initialState, applyMiddleware(thunk));

const client = new ApolloClient({uri: 'http://localhost:5000/graphql',fetch: fetch});


// client
//   .query({
//     query: gql`
//       {
//         concerts {
//           name
//           details
//         }
//       }
//     `
//   })
//   .then(result => console.log(result));

ReactDOM.render(
    <ApolloProvider client={client}>
        <Provider store={myStore}>
            <App />
        </Provider>
    </ApolloProvider>
    ,

    document.querySelector("#root")
);