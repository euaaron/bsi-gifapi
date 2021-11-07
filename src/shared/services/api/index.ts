export interface IApiService {
  url: string;
  key?: string;
  limit?: number;
  get(params: any): Promise<any>;
}
