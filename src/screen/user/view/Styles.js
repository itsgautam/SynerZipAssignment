/*
 * File Description
 *
 *
 * Created on Wed Aug 26 2020
 * Created by: Gautam Sharma
 * Copyright (c) 2020
 */
import { StyleSheet } from 'react-native';
import commonStyles from '../../common/style/CommonStyles';
import R from '../../../res';

// define your styles
const styles = StyleSheet.create({
    ...commonStyles,
    mainContainer: {
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
    }
});

export default styles;