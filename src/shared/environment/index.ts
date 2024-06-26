export const getWindow = (): Window => window;

export const getServiceBase = (): string => "/service/v1";

export const getPort = (): string | number => {
  const { hostname } = getWindow().location;
  if (hostname === "localhost") {
    return 3000;
  }
  return "";
};
