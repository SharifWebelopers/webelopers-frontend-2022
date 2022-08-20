const getEnvVariable = (
  envName: string,
  defaultValue: string = ""
): string => {
  return process.env[envName] || defaultValue;
};

export const SERVER_ROOT_URL = getEnvVariable(
  "NEXT_PUBLIC_SERVER_ROOT_URL",
  "https://webeloperssut.com/api"
);

export const GOOGLE_CLIENT_ID = getEnvVariable(
  "NEXT_PUBLIC_GOOGLE_CLIENT_ID",
  ""
);

export const GITHUB_CLIENT_ID = getEnvVariable(
  "NEXT_PUBLIC_GITHUB_CLIENT_ID",
  ""
);

export const GITHUB_REDIRECT_URI = getEnvVariable(
  "NEXT_PUBLIC_GITHUB_REDIRECT_URI",
  ""
);
