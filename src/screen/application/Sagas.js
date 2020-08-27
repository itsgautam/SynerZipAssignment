/*
 * File Description
 *
 *
 * Created on Wed Aug 26 2020
 * Created by: Gautam Sharma
 * Copyright (c) 2020
 */
import { all, fork } from "redux-saga/effects";

// Imports: Other Sagas
import {
    watchUserList, watchDeleteUser,
    watchFetchUser, watchCreateUser,
    watchUpdateUser
} from "../user/redux/Saga";

// Export Root Saga
export function* rootSaga() {
    yield all([
        fork(watchUserList),
        fork(watchDeleteUser),
        fork(watchFetchUser),
        fork(watchCreateUser),
        fork(watchUpdateUser),
    ]);
}