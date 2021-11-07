import { GiphyService, IGiphyParams } from '.';

describe('Giphy Service', () => {
  let service: GiphyService;

  beforeAll(() => {
    service = new GiphyService();
  });

  it('should get data from Giphy API', () => {
    const params: IGiphyParams = {
      q: 'cat',
      limit: 2,
      offset: 0,
    };

    service.get(params).then(data => {
      expect(data).toBeDefined();
    });
  });
});
