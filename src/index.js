/**
 * Created by Алексей on 07.07.2017.
 */
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux'
import store from './store'
import './main.css'
import Main from './Components/Main'


ReactDOM.render(
    <Provider  store={store}>
        <Main />
    </Provider>,
    document.getElementById("root")
);