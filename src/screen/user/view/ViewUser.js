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
import { Container, Content } from 'native-base';
import R from '../../../res';
import ToolBar from '../../common/component/ToolBar'
import ProgressCircle from '../../common/component/ProgressCircle';
import styles from './Styles';
import { connect } from "react-redux";
import ViewUserViewModel from './ViewUserViewModel';
import Utils from '../../../utils';

// create a component
class ViewUser extends Component {

    componentDidMount() {
        const { route } = this.props;
        const { item } = route.params;

        viewUserViewModel = new ViewUserViewModel(this);
        viewUserViewModel.fetchUserDetails(item.id);
    }

    showMsg = msg => Utils.Toast.showToast(msg);

    render() {
        const { navigation, isLoading, userData } = this.props;
        return (
            <Container>
                <ToolBar
                    title={R.strings.screen.viewUser}
                    bgColor={R.colors.appBackground}
                    leftIconName={"arrow-back"}
                    leftIconType={"MaterialIcons"}
                    menuOnPress={() => navigation.goBack()}
                />

                <ProgressCircle visible={JSON.parse(isLoading)} />

                <Content contentContainerStyle={styles.contentContainerStyle}>
                    <View style={styles.mainContainer}>
                        <View style={styles.viewContainer}>
                            <Text style={styles.titleText}>{R.strings.viewUser.id} </Text>
                            <Text style={styles.contentText}>{userData.id}</Text>
                        </View>

                        <View style={styles.viewContainer}>
                            <Text style={styles.titleText}>{R.strings.viewUser.name} </Text>
                            <Text style={styles.contentText}>{userData.name}</Text>
                        </View>

                        <View style={styles.viewContainer}>
                            <Text style={styles.titleText}>{R.strings.viewUser.email} </Text>
                            <Text style={styles.contentText}>{userData.email}</Text>
                        </View>

                        <View style={styles.viewContainer}>
                            <Text style={styles.titleText}>{R.strings.viewUser.phone} </Text>
                            <Text style={styles.contentText}>{userData.phone}</Text>
                        </View>

                        <View style={styles.viewContainer}>
                            <Text style={styles.titleText}>{R.strings.viewUser.username} </Text>
                            <Text style={styles.contentText}>{userData.username}</Text>
                        </View>

                        <View style={styles.viewContainer}>
                            <Text style={styles.titleText}>{R.strings.viewUser.website} </Text>
                            <Text style={styles.contentText}>{userData.website}</Text>
                        </View>

                        <View style={styles.viewContainer}>
                            <Text style={styles.titleText}>{R.strings.viewUser.street} </Text>
                            <Text style={styles.contentText}>{userData.address && userData.address.street}</Text>
                        </View>

                        <View style={styles.viewContainer}>
                            <Text style={styles.titleText}>{R.strings.viewUser.suite} </Text>
                            <Text style={styles.contentText}>{userData.address && userData.address.suite}</Text>
                        </View>

                        <View style={styles.viewContainer}>
                            <Text style={styles.titleText}>{R.strings.viewUser.city} </Text>
                            <Text style={styles.contentText}>{userData.address && userData.address.city}</Text>
                        </View>

                        <View style={styles.viewContainer}>
                            <Text style={styles.titleText}>{R.strings.viewUser.zipcode} </Text>
                            <Text style={styles.contentText}>{userData.address && userData.address.zipcode}</Text>
                        </View>

                        <View style={styles.viewContainer}>
                            <Text style={styles.titleText}>{R.strings.viewUser.companyName} </Text>
                            <Text style={styles.contentText}>{userData.company && userData.company.name}</Text>
                        </View>
                    </View>
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
export default connect(mapStateToProps, mapDispatchToProps)(ViewUser);


