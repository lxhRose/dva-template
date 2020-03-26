import fetch from 'dva/fetch';
import { stringify } from 'qs';
import URL from "./url";
import { message } from "antd";

function parseJSON(response) {
  return response.json();
}

function checkStatus(response) {
  if (response.status >= 200 && response.status < 300) {
    return response;
  } else {
    message.error('错误提示：' + response.statusText);
  }

  const error = new Error(response.statusText);
  error.response = response;
  throw error;
}

function checkCode(response) {
  if (parseInt(response.meta.code, 10) !== 200) {
    message.error('错误提示：' + response.meta.message);
    response.success = false;
  } else {
    response.success = true;
  }
  return response;
}

const BASE_URL = process.env.NODE_ENV === 'production'
  ? `http://${URL}`
  : '';

/**
 * Requests a URL, returning a promise.
 *
 * @param  {string} url       The URL we want to request
 * @param  {object} [options] The options we want to pass to "fetch"
 * @return {object}           An object containing either "data" or "err"
 */
export default function request(url, options) {
  const newOptions = { ...options, credentials: 'include' };
  let newUrl = BASE_URL + url;
  if (newOptions.method === 'POST' || newOptions.method === 'PUT') {
    if (newOptions.params instanceof FormData) {
      newOptions.headers = {};
      newOptions.body = newOptions.params;
    } else {
      newOptions.headers = {
        'Accept': 'application/json',
        'Content-Type': 'application/json;charset=utf-8'
      };
      newOptions.body = JSON.stringify(newOptions.params);
    }
  } else if (newOptions.method === 'GET' || newOptions.method === 'DELETE') {
    newOptions.headers = {};
    newUrl = newOptions.params
      ? `${newUrl}?${stringify(newOptions.params)}`
      : newUrl;
  }
  return Promise.race([
    fetch(newUrl, newOptions),
    new Promise((resolve, reject) => {
      setTimeout(() => reject(new Error('requestTimeout')), 5000);
    })
  ]).then(checkStatus)
    .then(parseJSON)
    .then(checkCode)
    .catch(err => {
      err = err.toString();
      console.log(err);
      if (err.indexOf('requestTimeout') > -1) {
        message.error('请求超时！');
      } else {
        message.error(err);
      }
      return err;
    });
}
