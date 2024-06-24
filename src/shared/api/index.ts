// Dynamic imports
import {
  checkSuccess,
  createOptions,
  createQueryString,
  fetchBaseUrl,
  fetchErrorHandler,
  fetchHandler,
} from "./helper";

class http {
  get(path: string, queryString: any = null, options: any = {}) {
    let finalUrl: string;
    if (queryString) {
      finalUrl = `${fetchBaseUrl()}/${path}?${createQueryString(queryString)}`;
    } else {
      finalUrl = `${fetchBaseUrl()}/${path}`;
    }
    const getOptions = { method: "GET" };
    options = { ...options, ...getOptions };
    const optionsWithHeaders = createOptions(options, false);
    return fetch(finalUrl, optionsWithHeaders)
      .then(fetchHandler)
      .then(checkSuccess)
      .catch(fetchErrorHandler);
  }

  post(url: string, body: any, isMultiPart = false, options = {}) {
    const postOptions = {
      method: "POST",
      body: isMultiPart ? body : JSON.stringify(body),
    };
    options = { ...options, ...postOptions };
    const optionsWithHeaders = createOptions(options, isMultiPart);
    return fetch(`${fetchBaseUrl()}/${url}`, optionsWithHeaders)
      .then(fetchHandler)
      .then(checkSuccess)
      .catch(fetchErrorHandler);
  }
}

const instance = new http();

export default instance;
