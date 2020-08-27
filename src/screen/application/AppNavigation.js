/*
 * File Description
 *
 *
 * Created on Wed Aug 26 2020
 * Created by: Gautam Sharma
 * Copyright (c) 2020
 */
import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import UserScreen from '../user/list/UserScreen';
import CreateUser from '../user/create/CreateUser';
import ViewUser from '../user/view/ViewUser';

import R from '../../res';

const Stack = createStackNavigator();

function AppNavigation() {
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName={R.strings.screenName.userList}
                screenOptions={{
                    headerShown: false
                }}
            >
                <Stack.Screen name={R.strings.screenName.userList} component={UserScreen} />
                <Stack.Screen name={R.strings.screenName.viewUser} component={ViewUser} />
                <Stack.Screen name={R.strings.screenName.createUser} component={CreateUser} />
            </Stack.Navigator>
        </NavigationContainer>
    );
}

export default AppNavigation;