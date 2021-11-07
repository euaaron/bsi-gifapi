import { config } from 'dotenv';
config();

export const Config = {
  HOST: process.env.HOST || 'http://localhost',
  PORT: Number.parseInt(process.env.PORT as string) || 3000,
  API: {
    GIPHY: {
      URL: 'https://api.giphy.com/v1/gifs/search',
      KEY: process.env.GIPHY_KEY as string,
      LIMIT: 25,
    }
  },
};
