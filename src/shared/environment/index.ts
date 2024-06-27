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
