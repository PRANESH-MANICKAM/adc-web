// Static import
import { get } from "lodash";

export const getWindow: Function = (): Window => window;

export const getServiceBase: Function = (): string => "/service/v1";

export const getPort: Function = (): string | number => {
  const { hostname } = get(getWindow(), ["location"]);
  if (hostname === "localhost") {
    return 3000;
  }
  return "";
};

export const getDevicePlatform = (): string => {
  const userAgent = navigator.userAgent || navigator.vendor;

  // Check for iOS
  if (/iPad|iPhone|iPod/.test(userAgent)) {
    return "iOS";
  }

  // Check for Android
  if (/android/i.test(userAgent)) {
    return "Android";
  }

  // Check for Windows
  if (/windows/i.test(userAgent)) {
    return "Windows";
  }

  // Check for macOS
  if (/Macintosh|MacIntel|MacPPC|Mac68K/.test(userAgent)) {
    return "macOS";
  }

  // Default: Assume other or unknown
  return "Other";
};
