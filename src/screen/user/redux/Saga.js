/*
 * File Description
 *
 *
 * Created on Wed Aug 26 2020
 * Created by: Gautam Sharma
 * Copyright (c) 2020
 */
import Utils from "../../../utils";
import R from '../../../res';
import ActTypes from "./Types";
import * as Actions from "./Actions";

import {
    takeEvery,
    put,
    cancelled,
    select,
    call,
} from "redux-saga/effects";

const getUserReducerFields = state => state.user;

function* userList() {
    let cancelSource = Utils.AxiosSagaUtility.getCancelSource();
    try {
        const isNetAvail = yield call(Utils.Network.isNetworkConnected);
        if (isNetAvail.isConnected) {
            yield put(Actions.actUserListApi.request());
            const response = yield call(
                Utils.AxiosSagaUtility.get,
                Utils.Api.BASE_URL + Utils.Api.USER_LIST,
                null,
                cancelSource.token
            );
            yield put(Actions.actUserListApi.success(response));
        } else {
            yield put(Actions.actUserListApi.failure(R.strings.message.noInternet));
        }
    } catch (error) {
        yield put(Actions.actUserListApi.failure(error));
    } finally {
        if (yield cancelled()) {
            yield call(cancelSource.cancel);
            yield put(Actions.actUserListApi.cancel());
        }
    }
}

function* deleteUser(action) {
    let cancelSource = Utils.AxiosSagaUtility.getCancelSource();
    try {
        const isNetAvail = yield call(Utils.Network.isNetworkConnected);
        const { id } = action;
        if (isNetAvail.isConnected) {
            yield put(Actions.actDeleteUserApi.request());
            const response = yield call(
                Utils.AxiosSagaUtility.del,
                Utils.Api.BASE_URL + Utils.Api.DELETE_USER + id,
                null,
                cancelSource.token
            );
            yield put(Actions.actDeleteUserApi.success(response));
            yield* userList();
        } else {
            yield put(Actions.actDeleteUserApi.failure(R.strings.message.noInternet));
        }
    } catch (error) {
        yield put(Actions.actDeleteUserApi.failure(error));
    } finally {
        if (yield cancelled()) {
            yield call(cancelSource.cancel);
            yield put(Actions.actDeleteUserApi.cancel());
        }
    }
}

function* fetchUser(action) {
    let cancelSource = Utils.AxiosSagaUtility.getCancelSource();
    try {
        const isNetAvail = yield call(Utils.Network.isNetworkConnected);
        const { id } = action;
        if (isNetAvail.isConnected) {
            yield put(Actions.actFetchUserApi.request());
            const response = yield call(
                Utils.AxiosSagaUtility.get,
                Utils.Api.BASE_URL + Utils.Api.FETCH_USER + id,
                null,
                cancelSource.token
            );
            yield put(Actions.actFetchUserApi.success(response));
            yield* userList();
        } else {
            yield put(Actions.actFetchUserApi.failure(R.strings.message.noInternet));
        }
    } catch (error) {
        yield put(Actions.actFetchUserApi.failure(error));
    } finally {
        if (yield cancelled()) {
            yield call(cancelSource.cancel);
            yield put(Actions.actFetchUserApi.cancel());
        }
    }
}

function* createUser() {
    let cancelSource = Utils.AxiosSagaUtility.getCancelSource();
    try {
        const isNetAvail = yield call(Utils.Network.isNetworkConnected);
        if (isNetAvail.isConnected) {
            yield put(Actions.actCreateUserApi.request());

            const { userData } = yield select(getUserReducerFields);

            const response = yield call(
                Utils.AxiosSagaUtility.post,
                Utils.Api.BASE_URL + Utils.Api.CREATE_USER,
                userData,
                null,
                cancelSource.token
            );
            yield put(Actions.actCreateUserApi.success(response));
            yield* userList();
        } else {
            yield put(Actions.actCreateUserApi.failure(R.strings.message.noInternet));
        }
    } catch (error) {
        yield put(Actions.actCreateUserApi.failure(error));
    } finally {
        if (yield cancelled()) {
            yield call(cancelSource.cancel);
            yield put(Actions.actCreateUserApi.cancel());
        }
    }
}

function* updateUser() {
    let cancelSource = Utils.AxiosSagaUtility.getCancelSource();
    try {
        const isNetAvail = yield call(Utils.Network.isNetworkConnected);
        if (isNetAvail.isConnected) {
            yield put(Actions.actUpdateUserApi.request());

            const { userData } = yield select(getUserReducerFields);
            Utils.Log.log("userData", userData);

            const response = yield call(
                Utils.AxiosSagaUtility.put,
                Utils.Api.BASE_URL + Utils.Api.UPDATE_USER + userData.id,
                userData,
                null,
                cancelSource.token
            );
            yield put(Actions.actUpdateUserApi.success(response));
            yield* userList();
        } else {
            yield put(Actions.actUpdateUserApi.failure(R.strings.message.noInternet));
        }
    } catch (error) {
        yield put(Actions.actUpdateUserApi.failure(error));
    } finally {
        if (yield cancelled()) {
            yield call(cancelSource.cancel);
            yield put(Actions.actUpdateUserApi.cancel());
        }
    }
}

// Watcher: For User List
export function* watchUserList() {
    // Take Every Action
    yield takeEvery(ActTypes.USER_LIST_SAGA, userList);
}

// Watcher: For Delete User
export function* watchDeleteUser() {
    // Take Every Action
    yield takeEvery(ActTypes.DELETE_USER_SAGA, deleteUser);
}

// Watcher: For Fetch User
export function* watchFetchUser() {
    // Take Every Action
    yield takeEvery(ActTypes.USER_SAGA, fetchUser);
}

// Watcher: For Create User
export function* watchCreateUser() {
    // Take Every Action
    yield takeEvery(ActTypes.CREATE_USER_SAGA, createUser);
}

// Watcher: For Edit User
export function* watchUpdateUser() {
    // Take Every Action
    yield takeEvery(ActTypes.UPDATE_USER_SAGA, updateUser);
}