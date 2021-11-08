import { config } from 'dotenv';
config();

export const Config = {
  HOST: process.env.API_HOST || 'http://localhost',
  PORT: Number.parseInt(process.env.API_PORT as string) || 3000,
  API: {
    GIPHY: {
      URL: 'https://api.giphy.com/v1/gifs/search',
      KEY: process.env.GIPHY_KEY as string,
      LIMIT: 25,
    }
  },
};
