/*
 * File Description
 *
 *
 * Created on Wed Aug 26 2020
 * Created by: Gautam Sharma
 * Copyright (c) 2020
 */

import Utils from "../../../utils";

const Types = {
    REQUEST: "_REQUEST",
    SUCCESS: "_SUCCESS",
    FAILURE: "_FAILURE",
    CANCEL: "_CANCEL",

    SHOW_LOADING: "SHOW_LOADING",

    UPDATE_NAME: "UPDATE_NAME",
    UPDATE_EMAIL: "UPDATE_EMAIL",
    UPDATE_PHONE: "UPDATE_PHONE",
    UPDATE_USERNAME: "UPDATE_USERNAME",
    UPDATE_ADDRESS: "UPDATE_ADDRESS",

    UPDATE_USER_DATA: "UPDATE_USER_DATA",

    USER_LIST_SAGA: "USER_LIST_SAGA",
    USER_LIST: Utils.Redux.asyncActionNames("USER_LIST"),

    USER_SAGA: "USER_SAGA",
    USER: Utils.Redux.asyncActionNames("USER"),

    CREATE_USER_SAGA: "CREATE_USER_SAGA",
    CREATE_USER: Utils.Redux.asyncActionNames("CREATE_USER"),

    UPDATE_USER_SAGA: "UPDATE_USER_SAGA",
    UPDATE_USER: Utils.Redux.asyncActionNames("UPDATE_USER"),

    DELETE_USER_SAGA: "DELETE_USER_SAGA",
    DELETE_USER: Utils.Redux.asyncActionNames("DELETE_USER"),
};

export default Types;