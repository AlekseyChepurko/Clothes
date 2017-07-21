/**
 * Created by Алексей on 09.07.2017.
 */

import {createStore, applyMiddleware} from 'redux'
import reducers from './reducers'


let createStoreWithMiddleware;
if(process.env.NODE_ENV !== 'production'){

    const {logger} = require('redux-logger');
    createStoreWithMiddleware =
        applyMiddleware(
            // logger
        )(createStore);
}
else {
    createStoreWithMiddleware =
        applyMiddleware(
        )(createStore);
}

const store = createStoreWithMiddleware(reducers,window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());
export default store