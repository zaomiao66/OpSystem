import React, { Component } from 'react'
import Op from './container/Op'
import StudentList from './container/studentList'
import ClassInfo from './container/classInfo'
import { Provider } from 'react-redux'
import rootReducer from './reducers'
import { createStore, applyMiddleware, compose } from 'redux'
import { Router, Route, IndexRedirect, browserHistory, IndexLink } from 'react-router'
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

const routes = [{
    path: '/',
    component: App,
    indexRoute: { component: StudentList },
    childRoutes: [
        { path: 'studentList(/:mid)', component: StudentList },
        { path: 'Op', component: Op },
        { path: 'classInfo', component: ClassInfo }
    ]
}]

class App extends Component {

    render() {
        return (
            <Provider store={store}>
                {/*<Op />*/}
                {/*<StudentList />*/}
                {/*<ClassInfo />*/}
                <Router routes={routes} history={browserHistory}/>
            </Provider>
        )
    }
}

export default App;
