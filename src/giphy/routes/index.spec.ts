import request from 'supertest';
import { Server } from '../../server';
import { GifModel } from '../../shared/models/gif';

describe('Giphy Route', () => {
  let server: Server;

  beforeAll(() => {
    server = new Server();
  });

  it('should be acessible', async () => {
    return request(server.load()).get('/giphy').then(response => {
      expect(response.status).toBe(200);
    });
  });

  it('should return 4 Gifs', async () => {
    return request(server.load()).get('/giphy?q=cat&limit=4').then(response => {
      expect(response.body).toHaveLength(4);
    });
  });

  it('should return gifs about cats', async () => {
    return request(server.load()).get('/giphy?q=cat&limit=4').then(response => {
      const gifs: GifModel[] = response.body;
      const hasCats: boolean = gifs.some(gif => gif.title.toLowerCase().includes('cat'));
      expect(hasCats).toBeTruthy();
    });
  });
});
