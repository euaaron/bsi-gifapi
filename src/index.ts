import { Express } from 'express';
import { Server } from './server';
import { Config } from './shared/configs/env';

const server = new Server();
const api: Express = server.load();

const { PORT, HOST } = Config;

api.listen(PORT, () => {
  console.log(`Server running at ${HOST}:${PORT}/`);
});

export default api;
