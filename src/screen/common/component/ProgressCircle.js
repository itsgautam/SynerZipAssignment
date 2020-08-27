/*
 * File Description
 * 
 * 
 * Created on Thu Aug 27 2020
 * Created by: Gautam Sharma
 * Copyright (c) 2020
 */

//import liraries
import React, { PureComponent } from "react";
import PropTypes from "prop-types";
import { Text, View, Modal } from "react-native";
import * as Progress from "react-native-progress";

// create a component
class ProgressCircle extends PureComponent {
  render() {
    const { message, visible, textColor, indicatorColors } = this.props;
    return (
      <Modal transparent visible={visible}>
        <View
          style={{
            flexDirection: "row",
            flex: 1,
            backgroundColor: "#000000AA",
            justifyContent: "center",
            alignItems: "center"
          }}
        >
          <Progress.CircleSnail
            duration={500}
            style={{ margin: 10 }}
            color={indicatorColors}
          />
          {message && <Text style={{ color: textColor }}>{message}</Text>}
        </View>
      </Modal>
    );
  }
}

ProgressCircle.propTypes = {
  message: PropTypes.string,
  visible: PropTypes.bool.isRequired,
  textColor: PropTypes.string,
  indicatorColors: PropTypes.array
};

ProgressCircle.defaultProps = {
  visible: false,
  message: null,
  textColor: "white",
  indicatorColors: ["red", "green", "blue"]
};

//make this component available to the app
export default ProgressCircle;
