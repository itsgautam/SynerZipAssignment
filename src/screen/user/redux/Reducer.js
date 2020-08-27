/*
 * File Description
 *
 *
 * Created on Wed Aug 26 2020
 * Created by: Gautam Sharma
 * Copyright (c) 2020
 */
import ActType from "./Types";

const initialState = {
    isLoading: false,
    userList: null,
    userData: {},
};

export default function reducer(state = initialState, action) {
    let newState = { ...state };
    switch (action.type) {
        case ActType.SHOW_LOADING: {
            newState.isLoading = JSON.parse(action.details);
            break;
        }
        // For User List
        case ActType.USER_LIST.request: {
            newState.isLoading = true;
            newState.userList = null;
            break;
        }
        case ActType.USER_LIST.success: {
            newState.isLoading = false;
            newState.userList = action.data;
            break;
        }
        case ActType.USER_LIST.failure:
        case ActType.USER_LIST.cancel: {
            newState.isLoading = false;
            newState.userList = null;
            break;
        }
        // For Fetch User
        case ActType.USER.request: {
            newState.isLoading = true;
            newState.userData = {};
            break;
        }
        case ActType.USER.success: {
            newState.isLoading = false;
            newState.userData = action.data;
            break;
        }
        case ActType.USER.failure:
        case ActType.USER.cancel: {
            newState.isLoading = false;
            newState.userData = {};
            break;
        }
        // Create User
        case ActType.CREATE_USER.request: {
            newState.isLoading = true;
            break;
        }
        case ActType.CREATE_USER.success: {
            newState.isLoading = false;
            break;
        }
        case ActType.CREATE_USER.failure:
        case ActType.CREATE_USER.cancel: {
            newState.isLoading = false;
            break;
        }
        // Update User
        case ActType.UPDATE_USER.request: {
            newState.isLoading = true;
            break;
        }
        case ActType.UPDATE_USER.success: {
            newState.isLoading = false;
            break;
        }
        case ActType.UPDATE_USER.failure:
        case ActType.UPDATE_USER.cancel: {
            newState.isLoading = false;
            break;
        }
        // Delete User
        case ActType.DELETE_USER.request: {
            newState.isLoading = true;
            break;
        }
        case ActType.DELETE_USER.success: {
            newState.isLoading = false;
            break;
        }
        case ActType.DELETE_USER.failure:
        case ActType.DELETE_USER.cancel: {
            newState.isLoading = false;
            break;
        }

        case ActType.UPDATE_NAME: {
            if (!newState.userData) {
                newState.userData = {};
            }

            newState.userData.name = action.details;
            break;
        }
        case ActType.UPDATE_EMAIL: {
            if (!newState.userData) {
                newState.userData = {};
            }

            newState.userData.email = action.details;
            break;
        }
        case ActType.UPDATE_PHONE: {
            if (!newState.userData) {
                newState.userData = {};
            }

            newState.userData.phone = action.details;
            break;
        }
        case ActType.UPDATE_USERNAME: {
            if (!newState.userData) {
                newState.userData = {};
            }

            newState.userData.username = action.details;
            break;
        }
        case ActType.UPDATE_ADDRESS: {
            if (!newState.userData) {
                newState.userData = {};
            }

            newState.userData.address = action.details;
            break;
        }
        case ActType.UPDATE_USER_DATA: {
            newState.userData = action.details;
            if (newState.userData) {
                newState.userData.address = newState.userData.address?.street;
            }
            break;
        }
        default:
            break;
    }
    return newState;
}