export type GifModel = {
  id: string;
  title: string;
  provider: string;
  images: {
    still: string;
    preview: string;
    downsized: string;
    original: string;
  }
}
