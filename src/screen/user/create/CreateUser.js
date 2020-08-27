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
import { View, Text } from 'react-native';
import { Container, Content, Form, Item, Input, Label } from 'native-base';
import Utils from '../../../utils';
import R from '../../../res';
import ToolBar from '../../common/component/ToolBar';
import ProgressCircle from '../../common/component/ProgressCircle';
import styles from './Styles';
import CreateUserViewModel from './CreateUserViewModel';
import { connect } from "react-redux";

// create a component
class CreateUser extends Component {

    componentDidMount() {
        createUserViewModel = new CreateUserViewModel(this);
    }

    showMsg = msg => Utils.Toast.showToast(msg);

    goBack = () => this.props.navigation.goBack();

    render() {
        const { isLoading, userData, route } = this.props;
        const item = route.params;
        return (
            <Container style={styles.container}>
                <ToolBar
                    title={item ? R.strings.screen.updateUser : R.strings.screen.createUser}
                    bgColor={R.colors.appBackground}
                    leftIconName={"arrow-back"}
                    leftIconType={"MaterialIcons"}
                    menuOnPress={() => this.goBack()}
                    rightIconName={"done"}
                    rightIconType={"MaterialIcons"}
                    rightPress={() => createUserViewModel.createUser(item)}
                />

                <ProgressCircle visible={JSON.parse(isLoading)} />

                <Content padder>
                    <Form>
                        <Item floatingLabel>
                            <Label>{R.strings.viewUser.name}</Label>
                            <Input
                                value={userData?.name}
                                onSubmitEditing={() => this.email ? this.email._root.focus() : {}}
                                returnKeyType={"next"}
                                blurOnSubmit={false}
                                onChangeText={text => createUserViewModel.updateName(text)} />
                        </Item>

                        <Item floatingLabel>
                            <Label>{R.strings.viewUser.email}</Label>
                            <Input
                                value={userData?.email}
                                getRef={(c) => this.email = c}
                                onSubmitEditing={() => this.phone ? this.phone._root.focus() : {}}
                                returnKeyType={"next"}
                                blurOnSubmit={false}
                                keyboardType={"email-address"}
                                onChangeText={text => createUserViewModel.updateEmail(text)} />
                        </Item>

                        <Item floatingLabel>
                            <Label>{R.strings.viewUser.phone}</Label>
                            <Input
                                value={userData?.phone}
                                getRef={(c) => this.phone = c}
                                onSubmitEditing={() => this.userName ? this.userName._root.focus() : {}}
                                returnKeyType={"next"}
                                blurOnSubmit={false}
                                keyboardType={"phone-pad"}
                                onChangeText={text => createUserViewModel.updatePhone(text)} />
                        </Item>

                        <Item floatingLabel>
                            <Label>{R.strings.viewUser.username}</Label>
                            <Input
                                value={userData?.username}
                                getRef={(c) => this.userName = c}
                                onSubmitEditing={() => this.address ? this.address._root.focus() : {}}
                                returnKeyType={"next"}
                                blurOnSubmit={false}
                                onChangeText={text => createUserViewModel.updateUserName(text)} />
                        </Item>

                        <Item floatingLabel>
                            <Label>{R.strings.viewUser.address}</Label>
                            <Input
                                value={userData?.address}
                                getRef={(c) => this.address = c}
                                returnKeyType={"done"}
                                blurOnSubmit={true}
                                onChangeText={text => createUserViewModel.updateAddress(text)} />
                        </Item>
                    </Form>
                </Content>
            </Container>
        );
    }
}

//make this component available to the app
const mapStateToProps = state => ({
    isLoading: state.user.isLoading,
    userData: state.user.userData,
});
// Any actions to map to the component?
const mapDispatchToProps = {};
export default connect(mapStateToProps, mapDispatchToProps)(CreateUser);