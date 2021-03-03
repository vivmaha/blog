export type AppConfig = {
  api: string;
  media: string;
};

export const getConfig = (): AppConfig => ({
  api: process.env.API as string,
  media: process.env.MEDIA as string,
});
