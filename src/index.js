import React from "react";
import ReactDOM from "react-dom";
import App from './components/App';
import {createStore ,compose, applyMiddleware} from 'redux'
import reducers from './reducers'
import {Provider} from 'react-redux'
import thunk from "redux-thunk";


const composeEnhancer= window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
ReactDOM.render(
    <Provider store={createStore(reducers , composeEnhancer(applyMiddleware(thunk)))}>
    <App/>
    </Provider>

,document.querySelector('#root'));