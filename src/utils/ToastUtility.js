/*
 * File Description
 * 
 * 
 * Created on Wed Aug 26 2020
 * Created by: Gautam Sharma
 * Copyright (c) 2020
 */

import Toast from "react-native-simple-toast";

const showToast = message => {
  Toast.show(message, Toast.SHORT);
};

const showLongToast = message => {
  Toast.show(message, Toast.LONG);
};

export { showToast, showLongToast };
