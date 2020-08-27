/*
 * File Description
 *
 *
 * Created on Wed Aug 26 2020
 * Created by: Gautam Sharma
 * Copyright (c) 2020
 */
//import liraries
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import R from '../../../res';
import { Icon } from 'native-base';
import Ripple from "react-native-material-ripple";

const getFullAddress = (address = {}) => address.street + " " + address.suite + " " + address.city + " " + address.zipcode;

// create a component
const UserItem = ({ item = {}, viewUser, editUser, deleteUser }) => {
    const name = item.name || "";
    const email = item.email || "";
    const address = getFullAddress(item.address);
    const phone = item.phone || "";
    const username = item.username || "";

    return (
        <View style={styles.container}>
            <Ripple onPress={viewUser} >
                <View style={styles.viewContainer}>
                    <Text style={styles.titleText}>{R.strings.userList.name} </Text>
                    <Text style={styles.contentText}>{name}</Text>
                </View>

                <View style={styles.viewContainer}>
                    <Text style={styles.titleText}>{R.strings.userList.email} </Text>
                    <Text style={styles.contentText}>{email}</Text>
                </View>

                <View style={styles.viewContainer}>
                    <Text style={styles.titleText}>{R.strings.userList.address} </Text>
                    <Text style={styles.contentText}>{address}</Text>
                </View>

                <View style={styles.viewContainer}>
                    <Text style={styles.titleText}>{R.strings.userList.phone} </Text>
                    <Text style={styles.contentText}>{phone}</Text>
                </View>

                <View style={styles.viewContainer}>
                    <Text style={styles.titleText}>{R.strings.userList.username} </Text>
                    <Text style={styles.contentText}>{username}</Text>
                </View>
            </Ripple>

            <View style={styles.viewContainer}>
                <Ripple style={styles.item} onPress={editUser}>
                    <Icon name="user-edit" type="FontAwesome5" style={styles.editIcon} />
                </Ripple>
                <Ripple style={styles.item} onPress={deleteUser}>
                    <Icon name="user-times" type="FontAwesome5" style={styles.deleteIcon} />
                </Ripple>
            </View>
        </View>

    );
};

// define your styles
const styles = StyleSheet.create({
    container: {
        flex: 1,
        elevation: 2,
        borderRadius: 5,
        padding: 10,
        margin: 2,
        backgroundColor: R.colors.white,
    },
    viewContainer: {
        flexDirection: "row",
        padding: 2
    },
    titleText: {
        flex: 1,
        color: R.colors.gray
    },
    contentText: {
        flex: 1,
        color: R.colors.black
    },
    item: {
        flex: 1
    },
    editIcon: { color: R.colors.orange, textAlign: 'center' },
    deleteIcon: { color: R.colors.red, textAlign: 'center' }
});

//make this component available to the app
export default UserItem;
