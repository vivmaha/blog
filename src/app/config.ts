const getEnv = (key: string): string => {
    const value = process.env[key];
    if (value === undefined) {
        throw new Error(`Missing environment variable: [${key}].`);
    }
    return value;
}

export const getConfig = () => ({
    api: getEnv("REACT_APP_SERVER_API"),
});