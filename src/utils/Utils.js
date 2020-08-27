/*
 * File Description
 * 
 * 
 * Created on Wed Aug 26 2020
 * Created by: Gautam Sharma
 * Copyright (c) 2020
 */

import * as Log from "./AppLogger";
import * as Redux from "./ReduxUtility";
import Api from "./APIUtility";
import * as Constant from "./Constants";
import * as AxiosSagaUtility from "./AxiosSagaUtility";
import * as Network from "./NetworkUtility";
import * as Toast from "./ToastUtility";

const Utils = {
  Log,
  Redux,
  AxiosSagaUtility,
  Api,
  Constant,
  Network,
  Toast
};

export default Utils;
