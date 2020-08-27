/*
 * File Description
 * 
 * 
 * Created on Wed Aug 26 2020
 * Created by: Gautam Sharma
 * Copyright (c) 2020
 */

import axios from "axios";

const MIME_MULTI_PART = "multipart/form-data";
const MIME_JSON = "application/json";

const TIMEOUT = 60 * 1000; // 1 Min

export function getCancelSource() {
  return axios.CancelToken.source();
}

export function* post(endpoint, requestData, requestHeaders, cancelToken) {
  try {
    const response = yield postRequest(
      endpoint,
      requestData,
      requestHeaders,
      MIME_JSON,
      cancelToken
    );

    let responseOK =
      response && response.status >= 200 && response.status < 300;

    let data = yield response.data;

    if (responseOK) {
      return data;
    } else {
      let error = new Error();
      error.response = data;
      error.statusCode = response.status;
      error.statusText = response.statusText;
      throw error;
    }
  } catch (e) {
    throw e;
  }
}

export function* multiPart(endpoint, requestData, requestHeaders, cancelToken) {
  try {
    const response = yield postRequest(
      endpoint,
      requestData,
      requestHeaders,
      MIME_MULTI_PART,
      cancelToken
    );
    let responseOK =
      response && response.status >= 200 && response.status < 300;

    let data = yield response.data;
    if (responseOK) {
      return data;
    } else {
      var error = new Error();
      error.response = data;
      error.statusCode = response.status;
      error.statusText = response.statusText;
      throw error;
    }
  } catch (e) {
    throw e;
  }
}

export function* get(endpoint, requestHeaders, cancelToken) {
  try {
    const response = yield getRequest(endpoint, requestHeaders, cancelToken);

    let responseOK =
      response && response.status >= 200 && response.status < 300;

    let data = yield response.data;

    if (responseOK) {
      return data;
    } else {
      var error = new Error();
      error.response = data;
      error.statusCode = response.status;
      error.statusText = response.statusText;
      throw error;
    }
  } catch (e) {
    throw e;
  }
}

export function* put(endpoint, requestData, requestHeaders, cancelToken) {
  try {
    const response = yield putRequest(
      endpoint,
      requestData,
      requestHeaders,
      MIME_JSON,
      cancelToken
    );

    let responseOK =
      response && response.status >= 200 && response.status < 300;

    let data = yield response.data;

    if (responseOK) {
      return data;
    } else {
      let error = new Error();
      error.response = data;
      error.statusCode = response.status;
      error.statusText = response.statusText;
      throw error;
    }
  } catch (e) {
    throw e;
  }
}

export function* del(endpoint, requestHeaders, cancelToken) {
  try {
    const response = yield deleteRequest(endpoint, requestHeaders, cancelToken);

    let responseOK =
      response && response.status >= 200 && response.status < 300;

    let data = yield response.data;

    if (responseOK) {
      return data;
    } else {
      var error = new Error();
      error.response = data;
      error.statusCode = response.status;
      error.statusText = response.statusText;
      throw error;
    }
  } catch (e) {
    throw e;
  }
}

export function getRequest(endpoint, requestHeaders, cancelToken) {
  let options = {
    timeout: TIMEOUT,
    validateStatus: function (status) {
      // return status <= 500;
      return true;
    }
  };
  if (cancelToken) {
    options.cancelToken = cancelToken;
  }
  if (requestHeaders) {
    const allHeaders = Object.assign({}, requestHeaders, {
      "Content-Type": MIME_JSON
    });
    options.headers = allHeaders;
  }
  return axios.get(endpoint, options);
}

export function postRequest(
  endpoint,
  requestData,
  requestHeaders,
  contentType,
  cancelToken
) {
  let options = {
    timeout: TIMEOUT,
    validateStatus: function (status) {
      // return status <= 500;
      return true;
    }
  };
  if (cancelToken) {
    options.cancelToken = cancelToken;
  }
  if (requestHeaders) {
    const allHeaders = Object.assign({}, requestHeaders, {
      "Content-Type": contentType
    });
    options.headers = allHeaders;
  } else {
    options.headers = { "Content-Type": contentType };
  }
  return axios.post(endpoint, requestData, options);
}


export function putRequest(
  endpoint,
  requestData,
  requestHeaders,
  contentType,
  cancelToken
) {
  let options = {
    timeout: TIMEOUT,
    validateStatus: function (status) {
      // return status <= 500;
      return true;
    }
  };
  if (cancelToken) {
    options.cancelToken = cancelToken;
  }
  if (requestHeaders) {
    const allHeaders = Object.assign({}, requestHeaders, {
      "Content-Type": contentType
    });
    options.headers = allHeaders;
  } else {
    options.headers = { "Content-Type": contentType };
  }
  return axios.put(endpoint, requestData, options);
}

export function deleteRequest(endpoint, requestHeaders, cancelToken) {
  let options = {
    timeout: TIMEOUT,
    validateStatus: function (status) {
      // return status <= 500;
      return true;
    }
  };
  if (cancelToken) {
    options.cancelToken = cancelToken;
  }
  if (requestHeaders) {
    const allHeaders = Object.assign({}, requestHeaders, {
      "Content-Type": MIME_JSON
    });
    options.headers = allHeaders;
  }
  return axios.delete(endpoint, options);
}