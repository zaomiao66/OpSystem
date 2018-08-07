import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import StudentList from "./container/studentList";
import Op from "./container/Op";
import ClassInfo from "./container/classInfo";
import JobReview from "./container/jobReview"

import rootReducer from './reducers'
import { createStore, applyMiddleware, compose } from 'redux'
import { Router,  browserHistory } from 'react-router'
import { createLogger } from 'redux-logger'
import { Provider } from 'react-redux'

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
        { path: 'studentList', component: StudentList },
        { path: 'Op(/:mid)', component: Op },
        { path: 'classInfo(/:mid)', component: ClassInfo },
        { path: 'jobReview', component: JobReview }
    ]
}];

ReactDOM.render(
    <Provider store={store}>
        <Router routes={routes} history={browserHistory}/>
    </Provider>,
    document.getElementById('root')
);
registerServiceWorker();
