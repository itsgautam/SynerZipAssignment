/*
 * File Description
 * 
 * 
 * Created on Wed Aug 26 2020
 * Created by: Gautam Sharma
 * Copyright (c) 2020
 */

import NetInfo from "@react-native-community/netinfo";

// check is Internet connected or not
const isNetworkConnected = () => NetInfo.fetch();

export {
  isNetworkConnected
};
