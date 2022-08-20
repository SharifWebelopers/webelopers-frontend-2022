const get_env_variable = (
  envName: string,
  defaultValue: string = ""
): string => {
  return process.env[envName] || defaultValue;
};

export const SERVER_ROOT_URL = get_env_variable(
  "NEXT_PUBLIC_SERVER_ROOT_URL",
  "https://webeloperssut.com/api"
);

export const GOOGLE_CLIENT_ID = get_env_variable(
  "NEXT_PUBLIC_GOOGLE_CLIENT_ID",
  ""
);

export const GITHUB_CLIENT_ID = get_env_variable(
  "NEXT_PUBLIC_GITHUB_CLIENT_ID",
  ""
);

export const GITHUB_REDIRECT_URI = get_env_variable(
  "NEXT_PUBLIC_GITHUB_REDIRECT_URI",
  ""
);
