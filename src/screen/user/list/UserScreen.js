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
import { FlatList, RefreshControl } from 'react-native';
import styles from './Styles';
import { connect } from "react-redux";
import UserViewModel from './UserViewModel';
import { Container } from 'native-base';
import Utils from '../../../utils';
import R from '../../../res';
import ToolBar from '../../common/component/ToolBar'
import UserItem from './UserItem';

// create a component
class UserScreen extends Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        this.focusListener = this.props.navigation.addListener("focus", () => {
            userVM = new UserViewModel(this);
            userVM?.fetchUserList();
        });
    }

    componentWillUnmount() {
        this.focusListener;
    }

    navigateToViewScreen = (item) => {
        this.props.navigation.navigate(R.strings.screenName.viewUser, {
            item: item
        });
    }

    navigateToEditScreen = (item) => {
        this.props.navigation.navigate(R.strings.screenName.createUser, {
            item: item
        });
    }

    navigateToCreateScreen = () => this.props.navigation.navigate(R.strings.screenName.createUser)

    showMsg = (msg) => Utils.Toast.showToast(msg);

    render() {
        const { userList, isLoading } = this.props;
        return (
            <Container style={styles.container}>
                <ToolBar
                    title={R.strings.screen.userList}
                    bgColor={R.colors.appBackground}
                    rightIconName={"user-plus"}
                    rightIconType={"FontAwesome5"}
                    rightPress={() => userVM?.createUserClick()}
                />

                <FlatList
                    refreshControl={
                        <RefreshControl
                            tintColor={R.colors.appBackground}
                            colors={[R.colors.appBackground]}
                            refreshing={isLoading}
                            onRefresh={() => userVM?.fetchUserList()}
                        />
                    }
                    removeClippedSubviews={true}
                    data={userList}
                    extraData={userList?.length}
                    renderItem={({ item, index }) => (
                        <UserItem item={item} key={index}
                            viewUser={() => userVM?.viewUserClick(item)}
                            editUser={() => userVM?.editUserClick(item)}
                            deleteUser={() => userVM?.deleteUserClick(item)} />
                    )}
                    keyExtractor={(item, index) => item.id.toString()}
                />
            </Container>
        );
    }
}

//make this component available to the app
const mapStateToProps = state => ({
    isLoading: state.user.isLoading,
    userList: state.user.userList,
});
// Any actions to map to the component?
const mapDispatchToProps = {};
export default connect(mapStateToProps, mapDispatchToProps)(UserScreen);
