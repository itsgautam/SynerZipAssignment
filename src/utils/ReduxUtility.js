/*
 * File Description
 * 
 * 
 * Created on Wed Aug 26 2020
 * Created by: Gautam Sharma
 * Copyright (c) 2020
 */

/**
 * @param baseName action base name
 * @return {object} an object with the three async action names
 */
export const asyncActionNames = baseName => ({
  failure: `${baseName}_FAILURE`,
  request: `${baseName}_REQUEST`,
  success: `${baseName}_SUCCESS`,
  cancel: `${baseName}_CANCEL`
});

/**
 * @param actionName {object}
 * @return {object} the three async object actions
 */
export const buildAsyncActions = actionName => ({
  request: () => ({
    type: actionName.request
  }),
  cancel: () => ({
    type: actionName.cancel
  }),
  failure: error => ({
    type: actionName.failure,
    error
  }),
  success: data => ({
    type: actionName.success,
    data
  }),
  sessionexpire: () => ({
    type: "SESSION_EXPIRE"
  })
});
