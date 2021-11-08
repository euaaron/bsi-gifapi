import axios from 'axios';
import { Config } from '../../shared/configs/env';
import { ApiError } from '../../shared/models/error';
import { GifModel } from '../../shared/models/gif';
import { IApiService } from '../../shared/services/api';
import { IGiphyDto } from '../dto';

export interface IGiphyParams {
  q: string;
  limit: number;
  offset: number;
}

export class GiphyService implements IApiService {
  constructor(
    private http = axios,
    public url: string = Config.API.GIPHY.URL,
    public key: string = Config.API.GIPHY.KEY,
    public limit: number = Config.API.GIPHY.LIMIT
  ) {}

  public async get(params: IGiphyParams): Promise<GifModel[]> {
    return new Promise<GifModel[]>(async (resolve, reject) => {
      const body: GifModel[] = [];
      this.getOnGiphy(params)
        .then((chunk: IGiphyDto) => {
          chunk.data.forEach(gif => {
            body.push({
              id: gif.id,
              title: gif.title,
              provider: 'giphy.com',
              images: {
                original: gif.images.original.url,
                downsized: gif.images.downsized.url,
                still: gif.images.fixed_height_still.url,
                preview: gif.images.preview_gif.url,
              },
            });
          });
          resolve(body);
        })
        .catch(err => {
          throw new ApiError('Internal Server Error', 500);
        });
    });
  }

  private async getOnGiphy(params: any): Promise<any> {
    return new Promise(async (resolve, reject) => {
      await this.http({
        method: 'GET',
        baseURL: this.url,
        params: {
          api_key: this.key,
          ...params,
        },
      })
        .then(response => {
          if(response.data) {
            resolve(response.data);
          } else {
            throw new ApiError('Could not find any GIF', 404);
          }
        })
        .catch(error => {
          throw new ApiError('Internal Server Error', 500);
        });
    });
  }
}
