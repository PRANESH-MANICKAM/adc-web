// Static imports
import { get } from "lodash";
import { getPort, getServiceBase } from "../environment";

export const fetchBaseUrl = () => {
  let url: string;
  const {
    location: { protocol, hostname },
  } = window;
  const port = getPort();
  const basePath = getServiceBase();
  if (hostname === "localhost") {
    url = `${protocol}//${hostname}:${port}${basePath}`;
  } else {
    url = `${protocol}//${hostname}${basePath}`;
  }
  return url;
};

export const createQueryString = (obj: any) => {
  if (!obj) {
    return "";
  }
  const esc = encodeURIComponent;
  return Object.keys(obj)
    .map((k) => `${esc(k)}=${esc(obj[k])}`)
    .join("&");
};

export const createOptions = (options: any, isMultiPart: boolean) => {
  options.headers = createHeaders(
    isMultiPart,
    get(options, "token"),
    get(options, "req")
  );
  return options;
};

export const createHeaders = (
  isMultiPart: boolean,
  token: string,
  req?: any
) => {
  const cookieToken = token || req?.cookies?.token;
  const headers = new Headers();
  headers.set("Pragma", "no-cache");
  headers.set("Cache-Control", "no-cache");
  headers.set("Accept", "application/json");
  headers.set("Access-Control-Allow-Origin", "*");
  headers.set("Access-Control-Allow-Methods", "GET, POST");
  if (!isMultiPart) {
    headers.set("Content-Type", "application/json");
  }
  if (cookieToken) {
    headers.set("Authorization", `Bearer ${cookieToken}`);
    headers.set("Cookies", req?.headers.cookie ?? "");
  }
  return new Headers(headers);
};

export const fetchHandler = async (res: any) => {
  const content = res.headers.get("content-disposition");
  if (content) return res;
  if (res.ok) {
    return res.json();
  }
  if (res.status !== 200) {
    return Promise.reject(res);
  }
  return Promise.reject(res);
};

export const checkSuccess = (res: any) => {
  const content = res.headers && res.headers.get("content-disposition");
  if (content) return res;
  if (res.success) {
    return res;
  }
  return Promise.reject(res);
};

export const fetchErrorHandler = (res: any) => Promise.reject(res);
