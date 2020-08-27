/*
 * File Description
 * 
 * 
 * Created on Wed Aug 26 2020
 * Created by: Gautam Sharma
 * Copyright (c) 2020
 */
import { AppRegistry, YellowBox, LogBox } from "react-native";
import { name as appName } from "./app.json";
import Config from "./src/config";

import "./src/config/ReactotronConfig";

import 'react-native-gesture-handler';

import App from './src/screen/application';

// console.disableYellowBox = true;
console.disableYellowBox = Config.useYellowBox;
LogBox.ignoreAllLogs = Config.useYellowBox;

// allow reactotron overlay for fast design in dev mode
const app = Config.useReactotron ? console.tron.overlay(App) : App;

// Load first app screen
AppRegistry.registerComponent(appName, () => app);
