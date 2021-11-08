import { config } from 'dotenv';
config();

export const Config = {
  API_HOST: process.env.API_HOST || 'http://localhost',
  API_PORT: Number.parseInt(process.env.API_PORT as string) || 3000,
  HOST: process.env.HOST || process.env.API_HOST || 'http://localhost',
  PORT: Number.parseInt(process.env.PORT as string) || Number.parseInt(process.env.API_PORT as string) || 3000,
  API: {
    GIPHY: {
      URL: 'https://api.giphy.com/v1/gifs/search',
      KEY: process.env.GIPHY_KEY as string,
      LIMIT: 25,
    }
  },
};
