import { SwaggerOptions } from 'swagger-ui-express';
import { Config } from '../env';

export const swaggerOptions: SwaggerOptions = {
  apis: ['./src/**/*.routes.*s', './src/**/routes/*'],
  definition: {
    openapi: '3.0.0',
    basePath: '/',
    info: {
      version: '1.0.0',
      title: 'GIF API',
      description: 'An Express API that grabs gifs from Giphy.com',
    },
    servers: [
      {
        url: `${Config.HOST}:${Config.PORT}`,
        description: 'API host',
      },
    ],
    tags: [
      {
        name: 'Giphy',
        description: 'Get GIFS from Giphy',
      },
    ],
    schemes: ['http'],
    produces: ['application/json'],
  },
};
