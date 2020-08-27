/*
 * File Description
 *
 *
 * Created on Thu Aug 26 2020
 * Created by: Gautam Sharma
 * Copyright (c) 2020
 */
import BaseViewModel from '../../common/base/BaseViewModel';
import * as Actions from '../redux/Actions';
import R from '../../../res';

class ViewUserViewModel extends BaseViewModel {
    constructor(scrRef) {
        super();
        this.scrRef = scrRef;
    }

    fetchUserDetails = (id) => {
        this.dispatchEvent(Actions.fetchUserApiCall(id))
            .then(res => { })
            .catch(err => this.showError(this, err))
    }
}

export default ViewUserViewModel;