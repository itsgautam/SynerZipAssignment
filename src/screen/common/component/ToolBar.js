/*
 * File Description
 * 
 * 
 * Created on Wed Aug 26 2020
 * Created by: Gautam Sharma
 * Copyright (c) 2020
 */

import React, { Component } from "react";
import {
  Header,
  Left,
  Right,
  Body,
  Button,
  Icon,
  Text,
} from "native-base";
import PropTypes from "prop-types";
import { View, Platform, StatusBar } from "react-native";
import R from "../../../res";
import Ripple from "react-native-material-ripple";

export default class ToolBar extends Component {
  static propTypes = {
    title: PropTypes.string,
    subTitle: PropTypes.string,
    leftIconName: PropTypes.string,
    leftIconType: PropTypes.string,
    elevation: PropTypes.number,
    rightIconName: PropTypes.string,
    rightIconType: PropTypes.string,
    menuOnPress: PropTypes.func,
    rightPress: PropTypes.func,
    bgColor: PropTypes.any.isRequired,
  };

  static defaultProps = {
    bgColor: "transparent",
    subTitle: null,
    elevation: 2,
  };

  componentDidMount() {
    const { bgColor } = this.props;
    StatusBar.setBackgroundColor(bgColor);
    if (Platform.OS === "ios") {
      StatusBar.setBarStyle("light-content");
    }
  }

  render() {
    return (
      <View>
        <Header
          style={{
            backgroundColor: this.props.bgColor,
            elevation: this.props.elevation,
          }}
          noShadow={true}
        >
          {(this.props.leftIconName !== undefined &&
            this.props.leftIconName !== null) ? (
              <Left>
                <Button transparent onPress={this.props.menuOnPress}>
                  <Icon
                    type={this.props.leftIconType}
                    name={this.props.leftIconName}
                    style={{ color: R.colors.white }}
                  />
                </Button>
              </Left>
            ) : Platform.OS === "ios" ? (
              <Left />
            ) : null}
          <Body style={{ flex: 2, marginLeft: 15 }}>
            <Text
              style={{
                color: R.colors.white,
                fontWeight: "bold",
                fontSize: 18,
              }}
            >
              {this.props.title}
            </Text>
            {this.props.subTitle !== null && (
              <Text
                style={{
                  color: R.colors.white,
                  fontSize: 14,
                }}
              >
                {this.props.subTitle}
              </Text>
            )}
          </Body>
          {(this.props.rightIconName !== undefined &&
            this.props.rightIconName !== null) ? (
              <Right>
                <Button transparent onPress={this.props.rightPress}>
                  <Icon
                    type={this.props.rightIconType}
                    name={this.props.rightIconName}
                    style={{ color: R.colors.white }}
                  />
                </Button>
              </Right>
            ) : Platform.OS === "ios" ? (
              <Right />
            ) : null}
        </Header>
      </View>
    );
  }
}
