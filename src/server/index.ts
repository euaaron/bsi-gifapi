import cors from 'cors';
import express, { Express } from 'express';
import swaggerJSDoc from 'swagger-jsdoc';
import swaggerUi from 'swagger-ui-express';
import { GiphyRouter } from '../giphy/routes';
import { swaggerOptions } from '../shared/configs/swagger';

export class Server {
  private _server: Express;
  private _instance: any;

  constructor() {
    this._server = express();
  }

  private loadMiddlewares() {
    this._server.use(cors());
    this._server.use(express.json());

    const specs = swaggerJSDoc(swaggerOptions);
    this._server.use('/', swaggerUi.serve, swaggerUi.setup(specs));
  }

  private loadRoutes() {
    this._server.use('/giphy', GiphyRouter());
  }

  public load() {
    this.loadRoutes();
    this.loadMiddlewares();
    return this._server;
  }

  public stop() {
    if (this._instance) {
      return this._instance.close((err: any) => {
        process.exit(err ? 1 : 0);
      });
    }
  }
}
