/*
 * File Description
 *
 *
 * Created on Wed Aug 26 2020
 * Created by: Gautam Sharma
 * Copyright (c) 2020
 */
//import liraries
import React, { Component } from 'react';
import { Provider } from "react-redux";
import store from "./AppStore";
import AppNavigation from './AppNavigation';

// create a component
class Application extends Component {
    render() {
        return (
            <Provider store={store}>
                <AppNavigation />
            </Provider>
        );
    }
}

//make this component available to the app
export default Application;
