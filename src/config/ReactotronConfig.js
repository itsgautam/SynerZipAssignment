/*
 * File Description
 * Reactotron config file
 *
 * Created on Fri Dec 21 2018
 * Created by: Gautam Sharma
 * Copyright (c) 2018
 */

import Reactotron, {
  openInEditor,
  networking,
  trackGlobalErrors
} from "reactotron-react-native";

import { reactotronRedux as reduxPlugin } from "reactotron-redux";
import sagaPlugin from "reactotron-redux-saga";
import { name as appName } from "../../app.json";
import Config from "./Config";

if (Config.useReactotron) {
  // First, set some configuration settings on how to connect to the app
  Reactotron.configure({
    name: appName,
    port: 9090
  })
    .use(reduxPlugin()) // for redux log
    .use(openInEditor()) // click on the error line of code to have the file open in your editor.
    .use(networking()) // to trace your network request
    .use(trackGlobalErrors())
    .use(sagaPlugin())
    .useReactNative()
    // .useReactNative({
    //   asyncStorage: false, // there are more options to the async storage.
    //   networking: {
    //     // optionally, you can turn it off with false.
    //     ignoreUrls: /symbolicate/
    //   },
    //   editor: false, // there are more options to editor
    //   errors: { veto: stackFrame => false }, // or turn it off with false
    //   overlay: true // just turning off overlay
    // })
    .connect()
    .clear();

  console.tron = Reactotron;
}
