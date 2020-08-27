/*
 * File Description
 * 
 * 
 * Created on Wed Aug 26 2020
 * Created by: Gautam Sharma
 * Copyright (c) 2020
 */
import store from "../../application/AppStore";

// create a Class
class BaseViewModel {
    getStore() {
        return store;
    }

    dispatchEvent(event) {
        return store.dispatch(event);
    }

    getCurrentState() {
        return store.getState();
    }

    showError = (viewModel, err) => {
        if (viewModel && viewModel.scrRef && viewModel.scrRef.showMsg) {
            if (typeof err === "string" || err instanceof String) {
                viewModel.scrRef.showMsg(err);
            } else {
                viewModel.scrRef.showMsg(JSON.stringify(err));
            }
        }
    };
}

//make this component available to the app
export default BaseViewModel;