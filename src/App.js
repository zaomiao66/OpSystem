import React, { Component } from 'react'
import TodoView from './container/Op'
import { Provider } from 'react-redux'
import rootReducer from './reducers'
import { createStore, applyMiddleware, compose } from 'redux'
import { createLogger } from 'redux-logger'
import './App.css'
import serverApi from "./middleware/serverApi";




const logger = createLogger();
const store = createStore(
    rootReducer,
    compose(
        applyMiddleware(serverApi,logger),
    )
)

class App extends Component {

    render() {
        return (
            <Provider store={store}>
                <TodoView />
            </Provider>
        )
    }
}

export default App;
