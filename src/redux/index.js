import {createStore, applyMiddleware} from 'redux'
import createSagaMiddleware from 'redux-saga'
import reducer from './reducers'

const sagaMiddleware = createSagaMiddleware()  //can have some arguments

const store = createStore(reducer, 
                                window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__(
                                applyMiddleware(sagaMiddleware))
                                )                                   

export default store