/*
 * File Description
 *
 *
 * Created on Wed Aug 26 2020
 * Created by: Gautam Sharma
 * Copyright (c) 2020
 */
import ActType from "./Types";
import Utils from '../../../utils';
import { WAIT_FOR_ACTION, ERROR_ACTION } from "redux-wait-for-action";

export const showLoading = details => ({
    type: ActType.SHOW_LOADING,
    details
});

export const updateName = details => ({
    type: ActType.UPDATE_NAME,
    details
});

export const updateEmail = details => ({
    type: ActType.UPDATE_EMAIL,
    details
});

export const updatePhone = details => ({
    type: ActType.UPDATE_PHONE,
    details
});

export const updateUserName = details => ({
    type: ActType.UPDATE_USERNAME,
    details
});

export const updateAddress = details => ({
    type: ActType.UPDATE_ADDRESS,
    details
});

export const updateUserData = details => ({
    type: ActType.UPDATE_USER_DATA,
    details
});

export const userListApiCall = () => ({
    type: ActType.USER_LIST_SAGA,
    [WAIT_FOR_ACTION]: ActType.USER_LIST.success,
    [ERROR_ACTION]: ActType.USER_LIST.failure
});

export const actUserListApi = Utils.Redux.buildAsyncActions(ActType.USER_LIST);

export const fetchUserApiCall = (id) => ({
    type: ActType.USER_SAGA,
    id,
    [WAIT_FOR_ACTION]: ActType.USER.success,
    [ERROR_ACTION]: ActType.USER.failure
});

export const actFetchUserApi = Utils.Redux.buildAsyncActions(ActType.USER);

export const createUserApiCall = () => ({
    type: ActType.CREATE_USER_SAGA,
    [WAIT_FOR_ACTION]: ActType.CREATE_USER.success,
    [ERROR_ACTION]: ActType.CREATE_USER.failure
});

export const actCreateUserApi = Utils.Redux.buildAsyncActions(ActType.CREATE_USER);

export const updateUserApiCall = () => ({
    type: ActType.UPDATE_USER_SAGA,
    [WAIT_FOR_ACTION]: ActType.UPDATE_USER.success,
    [ERROR_ACTION]: ActType.UPDATE_USER.failure
});

export const actUpdateUserApi = Utils.Redux.buildAsyncActions(ActType.UPDATE_USER);

export const deleteUserApiCall = (id) => ({
    type: ActType.DELETE_USER_SAGA,
    id,
    [WAIT_FOR_ACTION]: ActType.DELETE_USER.success,
    [ERROR_ACTION]: ActType.DELETE_USER.failure
});

export const actDeleteUserApi = Utils.Redux.buildAsyncActions(ActType.DELETE_USER);