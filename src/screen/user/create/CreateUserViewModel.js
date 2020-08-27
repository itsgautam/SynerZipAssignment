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
import Utils from '../../../utils';

class CreateUserViewModel extends BaseViewModel {
    constructor(scrRef) {
        super();
        this.scrRef = scrRef;
    }

    createUser = (item) => {
        if (this.isValid()) {
            if (item) {
                this.dispatchEvent(Actions.updateUserApiCall())
                    .then(res => {
                        this.scrRef?.showMsg(R.strings.message.updateSuccess);
                        this.scrRef?.goBack();
                    })
                    .catch(err => this.showError(this, err))
            } else {
                this.dispatchEvent(Actions.createUserApiCall())
                    .then(res => {
                        this.scrRef?.showMsg(R.strings.message.createSuccess);
                        this.scrRef?.goBack();
                    })
                    .catch(err => this.showError(this, err))
            }
        }
    }

    updateName = (value) => {
        this.dispatchEvent(Actions.updateName(value));
    }

    updateEmail = (value) => {
        this.dispatchEvent(Actions.updateEmail(value));
    }

    updatePhone = (value) => {
        this.dispatchEvent(Actions.updatePhone(value));
    }

    updateUserName = (value) => {
        this.dispatchEvent(Actions.updateUserName(value));
    }

    updateAddress = (value) => {
        this.dispatchEvent(Actions.updateAddress(value));
    }

    isValid = () => {
        const { userData } = this.getCurrentState().user;
        if (userData) {
            if (!userData.name) {
                this.scrRef?.showMsg(R.strings.message.enterName);
                return false;
            }
            if (!userData.email) {
                this.scrRef?.showMsg(R.strings.message.validEmail);
                return false;
            }
            if (!userData.phone) {
                this.scrRef?.showMsg(R.strings.message.validPhone);
                return false;
            }
            if (!userData.username) {
                this.scrRef?.showMsg(R.strings.message.enterUserName);
                return false;
            }
            if (!userData.address) {
                this.scrRef?.showMsg(R.strings.message.enterAddress);
                return false;
            }
        } else {
            this.scrRef?.showMsg(R.strings.message.enterName);
            return false;
        }
        return true;
    }
}

export default CreateUserViewModel;