import request from 'supertest';
import { Server } from './server';

describe('Server', () => {
  let server: Server;

  beforeAll(() => {
    server = new Server();
  });

  afterAll(() => {
    server.stop();
  });

  it('should start', async () => {
    return request(server.load()).get('/').then(response => {
      expect(response.status).toBe(200);
    });
  });
});
