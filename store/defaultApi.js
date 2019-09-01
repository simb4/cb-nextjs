import _ from 'lodash';
import qs from "qs";
import env from 'constants/env';

const STD_HEADERS = {
  'Accept': 'application/json, application/xml, text/plain, text/html, *.*',
  'Content-Type': 'application/x-www-form-urlencoded; charset=utf-8',
}

const modifyHeader = (options) => {
  let headers = _.extend({}, STD_HEADERS);
  if (options.withImage) {
    delete headers['Content-Type'];
  }
  if (!!options.token)
    headers = _.extend({ 'auth-token': options.token }, headers);
  if (!!options.fitness_id)
    headers = _.extend({ 'fitness-id': options.fitness_id }, headers);
  return headers;
}

export const stdApiPOST = (options) => (
  fetch(
    env.SERVER_URL + options.url,
    {
      method: 'POST',
      headers: modifyHeader(options),
      body: JSON.stringify(options.data || {}),
      // body: qs.stringify(options.data || {}),
    }
  )
)

export const stdApiGET = (options) => (
  fetch(
    env.SERVER_URL + options.url + '?' + qs.stringify(options.data || {}),
    {
      method: 'GET',
      headers: modifyHeader(options),
    }
  )
)

export const apiFormData = (options) => (
  fetch(
    env.SERVER_URL + options.url,
    {
      method: "POST",
      headers: modifyHeader(options),
      body: options.data
    }
  )
)
