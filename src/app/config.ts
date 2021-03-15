const getEnv = (key: string): string => {
  const value = process.env[key];
  if (value === undefined) {
    throw new Error(`Missing environment variable: [${key}].`);
  }
  return value;
};

export type AppConfig = {
  api: string;
};

export const getConfig = (): AppConfig => ({
  api: getEnv("REACT_APP_SERVER_API"),
});
