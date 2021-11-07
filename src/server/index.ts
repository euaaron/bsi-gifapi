import cors from 'cors';
import express, { Express } from 'express';
import swaggerJSDoc from 'swagger-jsdoc';
import swaggerUi from 'swagger-ui-express';
import { GiphyRouter } from '../giphy/routes';
import { swaggerOptions } from '../shared/configs/swagger';

export class Server {
  private _instance: Express;

  constructor() {
    this._instance = express();
  }

  private loadMiddlewares() {
    this._instance.use(cors());
    this._instance.use(express.json());

    const specs = swaggerJSDoc(swaggerOptions);
    this._instance.use('/', swaggerUi.serve, swaggerUi.setup(specs));
  }

  private loadRoutes() {
    this._instance.use('/giphy', GiphyRouter());
  }

  public load() {
    this.loadRoutes();
    this.loadMiddlewares();
    return this._instance;
  }
}
