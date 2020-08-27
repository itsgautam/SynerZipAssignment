/*
 * File Description
 *
 *
 * Created on Wed Aug 26 2020
 * Created by: Gautam Sharma
 * Copyright (c) 2020
 */

import BaseViewModel from '../../common/base/BaseViewModel';
import * as Actions from '../redux/Actions';
import R from '../../../res';

class UserViewModel extends BaseViewModel {
    constructor(scrRef) {
        super();
        this.scrRef = scrRef;
    }

    fetchUserList = () => {
        this.dispatchEvent(Actions.userListApiCall())
            .then(res => {
                if (!res || res.length == 0) {
                    this.scrRef?.showMsg(R.strings.message.noItem);
                }
            })
            .catch(err => this.showError(this, err))
    }

    createUserClick = () => {
        this.dispatchEvent(Actions.updateUserData(null));
        this.scrRef?.navigateToCreateScreen();
    }

    viewUserClick = (item) => {
        this.scrRef?.navigateToViewScreen(item);
    }

    editUserClick = (item) => {
        this.dispatchEvent(Actions.updateUserData(item));
        this.scrRef?.navigateToEditScreen(item);
    }

    deleteUserClick = (item) => {
        this.dispatchEvent(Actions.deleteUserApiCall(item?.id))
            .then(res => this.scrRef?.showMsg(R.strings.message.deleteSuccess))
            .catch(err => this.showError(this, err))
    }
}

export default UserViewModel;