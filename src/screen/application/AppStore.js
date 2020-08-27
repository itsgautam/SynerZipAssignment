/*
 * File Description
 *
 *
 * Created on Wed Aug 26 2020
 * Created by: Gautam Sharma
 * Copyright (c) 2020
 */
import { createStore, applyMiddleware, combineReducers, compose } from "redux";

import "../../config/ReactotronConfig";
import Reactotron from "reactotron-react-native";

import createReduxWaitForMiddleware from "redux-wait-for-action";
import createSagaMiddleware from "redux-saga";

import Config from "../../config";

import userReducer from '../user/redux/Reducer';

// Imports: Redux Root Saga
import { rootSaga } from "./Sagas";

// create our new saga monitor
const sagaMonitor = Config.useReactotron ? Reactotron.createSagaMonitor() : {};

// Middleware: Redux Saga
const sagaMiddleware = Config.useReactotron
    ? createSagaMiddleware({ sagaMonitor })
    : createSagaMiddleware();

const waitForActionMiddleware = createReduxWaitForMiddleware();

const appReducer = combineReducers({
    user: userReducer,
});

const middleWares = [];

middleWares.push(sagaMiddleware);
middleWares.push(waitForActionMiddleware);

const rootReducer = (state, action) => {
    return appReducer(state, action);
};

const store = Config.useReactotron
    ? createStore(
        rootReducer,
        compose(applyMiddleware(...middleWares), Reactotron.createEnhancer())
    )
    : createStore(
        rootReducer,
        compose(applyMiddleware(...middleWares))
    );

// Middleware: Redux Saga
sagaMiddleware.run(rootSaga);

export default store;